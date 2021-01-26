const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        hello: String!
        cards: [Card!]!
        reservations: [Reservation!]!
    }

    type Card {
        id: ID!
        name: String!
    }

    input ReservationInput {
        cardId: Int!
        firstName: String!
        lastName: String!
    }

    type Reservation {
        id: ID!
        cardId: Int!
        firstName: String!
        lastName: String!
    }

    type Mutation {
        createCard(name: String!): Card!
        deleteManyCards(name: String!): [Card!]!
        deleteOneCard(name: String!): [Card!]!

        createReservation(reservation: ReservationInput!): Reservation! 
    }
`;

