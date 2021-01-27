const mongoose = require('mongoose');

export const CardType = mongoose.model('CardType', 
    { 
        name: String,
        variant: String,
        manufacturer: String,
        price: Number,
        inventory: Number,
        quantity: Number
    }
);