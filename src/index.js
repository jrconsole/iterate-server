const { ApolloServer , gql } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
//const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
import { typeDefs } from './typeDefs';
import  resolvers  from './resolvers';
const PORT = 4000;

const startServer = async () => {
    const app = express();
    app.use(cors());
    //app.use(fileUpload());

    const uploads = require('./upload');
    app.use('/upload', uploads)

    const server = new ApolloServer({
        typeDefs, 
        resolvers,
        playground: {
            shareEnabled: true
        }
    });

    server.applyMiddleware({ app }); 

    await mongoose.connect(process.env.DB_CONN,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    app.listen({ port: PORT }, () => 
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );
};

startServer();