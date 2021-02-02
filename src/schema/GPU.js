const mongoose = require('mongoose');
import { Supplier } from './Supplier';

export const GPU = mongoose.Schema(
    { 
        name: String,
        supplier: Supplier,
    }
);