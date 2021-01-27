const mongoose = require('mongoose');

export const CardType = mongoose.Schema(
    { 
        name: String,
        variant: String,
        manufacturer: String,
        price: Number,
        inventory: Number,
        quantity: Number
    }
);