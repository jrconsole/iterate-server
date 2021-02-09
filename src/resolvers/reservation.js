import { UserInputError } from 'apollo-server-express';
import { Reservation } from '../models/Reservation';
import { Person } from '../models/Person';
import { Board } from '../models/Board';

export default {
    Query: {
        reservations: () => Reservation.find(),
    },

    Mutation: {
        createReservation: async (_, { reservation }) => {
            const person = await Person.findById(reservation.personId).exec();
            const board = await Board.findById(reservation.boardId).exec();

            if (!person || !board) {
                throw new UserInputError('Invalid Person or Board')
            } else {
                const newRes = new Reservation({ board, person });
                await newRes.save();
                return newRes;
            }
        }
    }
};

