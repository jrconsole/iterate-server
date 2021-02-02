const mongoose = require('mongoose');
import { Board } from '../schema/Board';
import { Person } from '../schema/Person';

export const Card = mongoose.model('Card', 
    { 
        serial: String,
        status: String,
        board: Board,
        currentLeasee: Person,
        allLeasees: [Person]
    }
);