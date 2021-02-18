import { UserInputError } from 'apollo-server-express';
import { Reservation } from '../models/Reservation';
import { Person } from '../models/Person';
import { GPU } from '../models/GPU';

export default {
    Query: {
        reservations: () => Reservation.find()
    },

    Mutation: {
        createReservation: async (_, { reservation }) => {
            const person = await Person.findById(reservation.personId).exec();
            const gpu = await GPU.findById(reservation.gpuId).exec();

            if (!person || !gpu) {
                throw new UserInputError('Invalid Person or Board')
            } else {
                const newRes = new Reservation(
                    { 
                        gpu, 
                        person, 
                        foundersOnly: reservation.foundersOnly,
                        date: new Date(),
                        status: 'ACTIVE'
                    }
                );
                await newRes.save();
                return newRes;
            }
        },

        updateReservation: async (_, { reservationUpdate }) => {
            const updatedReservation = Reservation.findOneAndUpdate(
                { _id: reservationUpdate.id },
                { status: reservationUpdate.status },
                { returnOriginal: false }
            );

            return updatedReservation;
        }
    }
};

