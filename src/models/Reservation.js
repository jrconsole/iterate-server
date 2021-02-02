const mongoose = require('mongoose');
import { Board } from '../schema/Board';

export const Reservation = mongoose.model('Reservation', 
    { 
        board: Board, 
        firstName: String,
        lastName: String
    }
);