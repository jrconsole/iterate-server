const mongoose = require('mongoose');
import { Supplier } from './Supplier';

export const GPU = mongoose.Schema(
    { 
        name: String,
        supplier: Supplier,
        price: Number, //for display only. Use Board for actual product price
        imgURL: String,
        specs: String
    }
);