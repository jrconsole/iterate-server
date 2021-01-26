const mongoose = require('mongoose');

export const Card = mongoose.model('Card', { name: String });