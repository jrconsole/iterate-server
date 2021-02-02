const mongoose = require('mongoose');
import { GPU } from '../schema/GPU';
import { Supplier } from '../schema/Supplier';

export const Board = mongoose.model('Board', 
    { 
        name: String,
        supplier: Supplier,
        gpu: GPU,
        price: Number,
        inventory: Number,
        quantity: Number
    }
);