const mongoose = require('mongoose');
import { Card } from '../schema/Card';
import { Board } from '../schema/Board';

export const Person = mongoose.model('Person', 
    { 
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        leasedCards: [Card]
    }
);