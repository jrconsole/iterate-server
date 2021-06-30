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
            const gpus = await GPU.find({ '_id':  { $in: reservation.gpuIds }}).exec();

            if (!person || !gpus || !gpus.length) {
                throw new UserInputError('Invalid Person or Board')
            } else {
                const completedGPUList = [];
                let resId;
                const resDate = new Date();
                for (const gpu of gpus) {
                    const newRes = new Reservation(
                        { 
                            gpu, 
                            person, 
                            foundersOnly: reservation.foundersOnly,
                            date: resDate,
                            status: 'ACTIVE'
                        }
                    );
                    await newRes.save();
                    completedGPUList.push(newRes.gpu);
                    resId = resId ? resId : newRes.id;
                }
                return {
                    id: resId,
                    gpus: completedGPUList,
                    person: person,
                    foundersOnly: reservation.foundersOnly,
                    date: resDate,
                };
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

