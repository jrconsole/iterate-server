const mongoose = require('mongoose');

export const Card = mongoose.Schema( { name: String });

//not using currently. Will use for embedding in a Lease