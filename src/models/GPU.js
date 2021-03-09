const mongoose = require('mongoose');
import { Supplier } from '../schema/Supplier';

export const GPU = mongoose.model('GPU', 
    { 
        name: String,
        supplier: Supplier,
        price: Number, //for display only. Use Board for actual product price
        imgURL: String,
        specs: String
    }
);