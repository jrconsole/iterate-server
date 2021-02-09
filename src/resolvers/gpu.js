import { UserInputError } from 'apollo-server-express';
import { GPU } from '../models/GPU';
import { Supplier } from '../models/Supplier';

export default {
    Query: {
        gpus: () => GPU.find()
    },

    Mutation: {
        createGPU: async (_, { gpu }) => {
            const supplier = await Supplier.findById(gpu.supplierId).exec();

            if (!supplier) {
                throw new UserInputError('Invalid GPU Supplier')
            } else {
                const newGPU = new GPU(
                    {
                        name: gpu.name,
                        supplier: supplier
                    }
                );
                await newGPU.save();
                return newGPU;
            }
        },
    }
}