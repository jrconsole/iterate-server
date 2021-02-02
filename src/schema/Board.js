const mongoose = require('mongoose');
import { GPU } from './GPU';
import { Supplier } from './Supplier';

export const Board = mongoose.Schema(
    { 
        name: String,
        supplier: Supplier,
        gpu: GPU,
        price: Number,
        inventory: Number,
        quantity: Number
    }
);