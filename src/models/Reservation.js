const mongoose = require('mongoose');
import { CardType } from '../schema/CardType';

export const Reservation = mongoose.model('Reservation', 
    { 
        cardType: CardType, 
        firstName: String,
        lastName: String
    }
);