import { Supplier } from '../models/Supplier';

export default {
    Query: {
        suppliers: () => Supplier.find()
    },

    Mutation: {
        createSupplier: async (_, { supplier }) => {
            const newSupplier = new Supplier({ name: supplier.name });
            await newSupplier.save();
            return newSupplier;
        },
    }
}