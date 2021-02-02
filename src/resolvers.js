import { UserInputError } from 'apollo-server-express';
import { Card } from './models/Card';
import { GPU } from './models/GPU'
import { Reservation } from './models/Reservation';
import { Supplier } from './models/Supplier';
import { Person } from './models/Person';
import { Board } from './models/Board';

export const resolvers = {
    Query: {
        cards: () => Card.find(),
        gpus: () => GPU.find(),
        boards: () => Board.find(),
        reservations: () => Reservation.find(),
        suppliers: () => Supplier.find(),
        people: () => Person.find()
    },

    Mutation: {
        createSupplier: async (_, { supplier }) => {
            const newSupplier = new Supplier(
                { name: supplier.name }
            )
            await newSupplier.save();
            return newSupplier;
        },

        createGPU: async (_, { gpu }) => {
            const supplier = await Supplier.findById(gpu.supplierId).exec();

            if (!supplier) {
                throw new UserInputError('Invalid GPU Supplier')
            } else {
                const newGPU = new GPU(
                    {
                        name: gpu.name,
                        supplier: supplier
                    }
                );
                await newGPU.save();
                return newGPU;
            }
        },

        createBoard: async (_, { board }) => {
            const supplier = await Supplier.findById(board.supplierId).exec();
            const gpu = await GPU.findById(board.gpuId).exec();

            if(!supplier || !gpu) {
                throw new UserInputError('Invalid Supplier or GPU input')
            } else {
                const newBoard = new Board(
                    {
                        name: board.name,
                        supplier,
                        gpu,
                        price: board.price,
                        inventory: 0,
                        quantity: 0
                    }
                );
                await newBoard.save();
                return newBoard;
            }
        },

        createCard: async (_, { card }) => {
            const board = await Board.findById(card.boardId).exec();

            if (!board) {
                throw new UserInputError('Invalid Board')
            } else {
                const newCard = new Card(
                    {
                        serial: card.serial,
                        status: "unreserved",
                        board: board 
                    }
                );
                await newCard.save();
                return newCard;
            }
        },

        // deleteManyCards: async (_, {name}) => {
        //     await Card.deleteMany({ name });
            
        //     return Card.find();
        // },

        // deleteOneCard: async (_, {name}) => {
        //     await Card.deleteOne({ name });

        //     return Card.find();
        // },

        // createReservation: async (_, { reservation }) => {
        //     const newRes = new Reservation(
        //         { 
        //             cardId: reservation.cardId, 
        //             firstName: reservation.firstName, 
        //             lastName: reservation.lastName 
        //         }
        //     );
        //     await newRes.save();
        //     return newRes;
        // }
    }
};

