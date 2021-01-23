const { ApolloServer , gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { Cat } = require('./models/Cat')
const PORT = 4000;

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs, 
        resolvers
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