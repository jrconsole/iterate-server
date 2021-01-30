import { UserInputError } from 'apollo-server-express';
import { Card } from './models/Card';
import { CardType } from './models/CardType'
import { Reservation } from './models/Reservation';

export const resolvers = {
    Query: {
        cards: () => Card.find(),
        reservations: () => Reservation.find()
    },

    Mutation: {
        createCard: async (_, { card }) => {
            const cardType = await CardType.findById(card.cardTypeId).exec();
            console.log(cardType)
            if (!cardType) {
                throw new UserInputError('Invalid Card Type')
            } else {
                const newCard = new Card(
                    {
                        serial: card.serial,
                        status: "unreserved",
                        type: cardType
                    }
                );
                await newCard.save();
                return newCard;
            }
        },

        deleteManyCards: async (_, {name}) => {
            await Card.deleteMany({ name });
            
            return Card.find();
        },

        deleteOneCard: async (_, {name}) => {
            await Card.deleteOne({ name });

            return Card.find();
        },

        createCardType: async (_, { type }) => {
            const newType = new CardType(
                {
                    name: type.name,
                    variant: type.variant,
                    manufacturer: type.manufacturer,
                    price: type.price,
                    inventory: 0,
                    quantity: 0
                }
            );
            await newType.save();
            return newType;
        },

        createReservation: async (_, { reservation }) => {
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

