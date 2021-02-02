const mongoose = require('mongoose');
import { Supplier } from '../schema/Supplier';

export const GPU = mongoose.model('GPU', 
    { 
        name: String,
        supplier: Supplier,
    }
);