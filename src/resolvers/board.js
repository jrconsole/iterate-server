import { UserInputError } from 'apollo-server-express';
import { GPU } from '../models/GPU'
import { Supplier } from '../models/Supplier';
import { Board } from '../models/Board';

export default {
    Query: {
        boards: () => {
            const boards = Board.find();
            console.log(boards);
            return boards; //Board.find()
        },
    },

    Mutation: {
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
    }
};

