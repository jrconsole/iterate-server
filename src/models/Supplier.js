const mongoose = require('mongoose');

export const Supplier = mongoose.model('Supplier', 
    { 
        name: String,
    }
);