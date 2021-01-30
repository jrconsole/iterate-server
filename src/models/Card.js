const mongoose = require('mongoose');
import { CardType } from '../schema/CardType';

export const Card = mongoose.model('Card', 
    { 
        serial: String,
        status: String,
        type: CardType,
        currentLeasee: String,
        allLeasees: [String]
    }
);