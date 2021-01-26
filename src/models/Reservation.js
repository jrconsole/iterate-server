const mongoose = require('mongoose');

export const Reservation = mongoose.model('Reservation', 
    { 
        cardId: Number, 
        firstName: String,
        lastName: String
    }
);