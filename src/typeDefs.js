const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        cards: [Card!]!
        cardTypes: [CardType!]!
        reservations: [Reservation!]!
        people: [Person!]!
    }

    type Person {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        waitlists: [CardType!]
        leasedCards: [Card!]
    }

    type Card {
        id: ID!
        serial: String!
        status: String!
        type: CardType!
        currentLeasee: Person
        allLeasees: [Person!]!
    }

    type CardType {
        id: ID!
        name: String!
        variant: String!
        manufacturer: String!
        price: Int!
        inventory: Int!
        quantity: Int!
    }

    input ReservationInput {
        cardTypeId: String!
        firstName: String!
        lastName: String!
    }

    type Reservation {
        id: ID!
        cardType: CardType!
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

