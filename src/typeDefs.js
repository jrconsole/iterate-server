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

    input PersonInput {
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
    }

    type Person {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        phone: String!
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

    input GPUUpdateInput {
        id: String!
        name: String,
        supplierId: String
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
        gpuId: String!
        personId: String!
        foundersOnly: Boolean!
    }

    enum ReservationStatus {
        ACTIVE
        LEASED
        REMOVED
    }

    input ReservationStatusInput {
        id: String!
        status: ReservationStatus!
    }

    type Reservation {
        id: ID!
        gpu: GPU!
        person: Person!
        foundersOnly: Boolean!
        date: String!
        status: ReservationStatus!
    }

    type Mutation {
        createSupplier(supplier: SupplierInput!): Supplier!

        createGPU(gpu: GPUInput!): GPU!
        updateGPU(gpuUpdate: GPUUpdateInput!): GPU!
        deleteOneGPU(id: String!): [GPU!]!
        
        createBoard(board: BoardInput!): Board!

        createCard(card: CardInput!): Card!
        # # deleteManyCards(name: String!): [Card!]!
        # # deleteOneCard(name: String!): [Card!]!

        createPerson(person: PersonInput!): Person!

        createReservation(reservation: ReservationInput!): Reservation! 
        updateReservation(reservationUpdate: ReservationStatusInput!): Reservation!
    }
`;

