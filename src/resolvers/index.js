// import { UserInputError } from 'apollo-server-express';
// import { Card } from '../models/Card';
// import { GPU } from '../models/GPU'
// import { Reservation } from '../models/Reservation';
// import { Supplier } from '../models/Supplier';
// import { Person } from '../models/Person';
// import { Board } from '../models/Board';

import supplier from './supplier';
import gpu from './gpu';
import board from './board';
import card from './card';
import person from './person';
import reservation from './reservation';
export default [ supplier, gpu, board, card, person, reservation ];

// export const resolvers = {
//     Query: {
//         cards: () => Card.find(),
//         gpus: () => GPU.find(),
//         boards: () => Board.find(),
//         reservations: () => Reservation.find(),
//         suppliers: () => Supplier.find(),
//         people: () => Person.find()
//     },

//     Mutation: {
//         createSupplier: async (_, { supplier }) => {
//             const newSupplier = new Supplier(
//                 { name: supplier.name }
//             )
//             await newSupplier.save();
//             return newSupplier;
//         },

//         createGPU: async (_, { gpu }) => {
//             const supplier = await Supplier.findById(gpu.supplierId).exec();

//             if (!supplier) {
//                 throw new UserInputError('Invalid GPU Supplier')
//             } else {
//                 const newGPU = new GPU(
//                     {
//                         name: gpu.name,
//                         supplier: supplier
//                     }
//                 );
//                 await newGPU.save();
//                 return newGPU;
//             }
//         },

//         createBoard: async (_, { board }) => {
//             const supplier = await Supplier.findById(board.supplierId).exec();
//             const gpu = await GPU.findById(board.gpuId).exec();

//             if(!supplier || !gpu) {
//                 throw new UserInputError('Invalid Supplier or GPU input')
//             } else {
//                 const newBoard = new Board(
//                     {
//                         name: board.name,
//                         supplier,
//                         gpu,
//                         price: board.price,
//                         inventory: 0,
//                         quantity: 0
//                     }
//                 );
//                 await newBoard.save();
//                 return newBoard;
//             }
//         },

//         createCard: async (_, { card }) => {
//             const board = await Board.findById(card.boardId).exec();

//             if (!board) {
//                 throw new UserInputError('Invalid Board')
//             } else {
//                 const newCard = new Card(
//                     {
//                         serial: card.serial,
//                         status: "unreserved",
//                         board: board 
//                     }
//                 );
//                 await newCard.save();
//                 return newCard;
//             }
//         },

//         // deleteManyCards: async (_, {name}) => {
//         //     await Card.deleteMany({ name });
            
//         //     return Card.find();
//         // },

//         // deleteOneCard: async (_, {name}) => {
//         //     await Card.deleteOne({ name });

//         //     return Card.find();
//         // },

//         createPerson: async (_, { person }) => {
//             const newPerson = new Person({
//                 firstName: person.firstName,
//                 lastName: person.lastName,
//                 email: person.email,
//                 phone: person.phone
//             });
//             await newPerson.save();
//             return newPerson;
//         },

//         createReservation: async (_, { reservation }) => {
//             const person = await Person.findById(reservation.personId).exec();
//             const board = await Board.findById(reservation.boardId).exec();

//             if (!person || !board) {
//                 throw new UserInputError('Invalid Person or Board')
//             } else {
//                 const newRes = new Reservation({ board, person });
//                 await newRes.save();
//                 return newRes;
//             }
//         }
//     }
// };

