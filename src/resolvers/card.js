import { UserInputError } from 'apollo-server-express';
import { Card } from '../models/Card';
import { Board } from '../models/Board';

export default {
    Query: {
        cards: () => Card.find(),
    },

    Mutation: {
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
    }
};

