const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        cards: [Card!]!
        gpus: [GPU!]!
        boards: [Board!]!
        reservations: [Reservation!]!
        suppliers: [Supplier!]!
        people: [Person!]!
    }

    type Person {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
        waitlists: [Board!]
        leasedCards: [Card!]
    }

    input SupplierInput {
        name: String!
    }

    type Supplier {
        id: ID!
        name: String!
    }

    input BoardInput {
        name: String!
        supplierId: String!
        gpuId: String!
        price: Int!
    }

    type Board {
        id: ID!
        name: String!
        supplier: Supplier!
        gpu: GPU!
        price: Int!
        inventory: Int!
        quantity: Int!
    }

    input GPUInput {
        name: String!
        supplierId: String! 
    }

    type GPU {
        id: ID!
        name: String!
        supplier: Supplier!
    }

    input CardInput {
        serial: String!
        boardId: String!
    }

    type Card {
        id: ID!
        serial: String!
        status: String!
        board: Board!
        currentLeasee: Person
        allLeasees: [Person!]!
    }

    input ReservationInput {
        boardId: String!
        firstName: String!
        lastName: String!
    }

    type Reservation {
        id: ID!
        board: Board!
        firstName: String!
        lastName: String!
    }

    type Mutation {
        createSupplier(supplier: SupplierInput!): Supplier!

        createGPU(gpu: GPUInput!): GPU!

        createBoard(board: BoardInput!): Board!

        createCard(card: CardInput!): Card!
        # # deleteManyCards(name: String!): [Card!]!
        # # deleteOneCard(name: String!): [Card!]!

        # createReservation(reservation: ReservationInput!): Reservation! 
    }
`;

