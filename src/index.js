const { ApolloServer , gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { Cat } from './models/Card';
const PORT = 4000;

const startServer = async () => {
    const app = express();

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
        useUnifiedTopology: true
    })

    app.listen({ port: PORT }, () => 
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );
};

startServer();