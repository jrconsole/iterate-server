const mongoose = require('mongoose');
import { Board } from './Board';
import { Card } from './Card';

export const Person = mongoose.Schema(
    { 
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        waitlists: [Board],
        leasedCards: [Card]
    }
);