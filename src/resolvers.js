import { Card } from './models/Card';
import { Reservation } from './models/Reservation';

export const resolvers = {
    Query: {
        hello: () => "hi",
        cards: () => Card.find(),
        reservations: () => Reservation.find()
    },

    Mutation: {
        createCard: async (_, {name}) => {
            const kitty = new Card({ name });
            await kitty.save();
            return kitty;
        },

        deleteManyCards: async (_, {name}) => {
            await Card.deleteMany({ name });
            
            return Card.find();
        },

        deleteOneCard: async (_, {name}) => {
            await Card.deleteOne({ name });

            return Card.find();
        },

        createReservation: async (_, {reservation}) => {
            const newRes = new Reservation(
                { 
                    cardId: reservation.cardId, 
                    firstName: reservation.firstName, 
                    lastName: reservation.lastName 
                }
            );
            await newRes.save();
            return newRes;
        }
    }
};

