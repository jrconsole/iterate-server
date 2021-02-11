const mongoose = require('mongoose');
import { GPU } from '../schema/GPU';
import { Person } from '../schema/Person';

export const Reservation = mongoose.model('Reservation', 
    { 
        gpu: GPU, 
        person: Person,
        foundersOnly: Boolean
    }
);