const mongoose = require('mongoose');
import { Board } from '../schema/Board';
import { Person } from '../schema/Person';

export const Reservation = mongoose.model('Reservation', 
    { 
        board: Board, 
        person: Person
    }
);