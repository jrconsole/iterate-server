const mongoose = require('mongoose');
import { Card } from './Card';

export const Person = mongoose.Schema(
    { 
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        leasedCards: [Card]
    }
);