import { Person } from '../models/Person';


export default {
    Query: {
        people: () => Person.find()
    },

    Mutation: {
        createPerson: async (_, { person }) => {
            const newPerson = new Person({
                firstName: person.firstName,
                lastName: person.lastName,
                email: person.email,
                phone: person.phone
            });
            await newPerson.save();
            return newPerson;
        },
    }
};

