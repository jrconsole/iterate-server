const mongoose = require('mongoose');
import { Card } from '../schema/Card';
import { CardType } from '../schema/CardType';

export const Person = mongoose.model('Person', 
    { 
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        waitlists: [CardType],
        leasedCards: [Card]
    }
);