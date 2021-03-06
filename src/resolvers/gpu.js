import { UserInputError } from 'apollo-server-express';
import { GPU } from '../models/GPU';
import { Supplier } from '../models/Supplier';

export default {
    Query: {
        gpus: () => GPU.find(),
        gpu: async (_, { id }) => {
            const foundGPU = await GPU.findById(id);
            return foundGPU
        }
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
                        supplier: supplier,
                        price: gpu.price,
                        imgURL: gpu.imgURL
                    }
                );
                await newGPU.save();
                return newGPU;
            }
        },

        updateGPU: async (_, { gpuUpdate }) => {
            if (gpuUpdate.supplierId) {
                const supplier = await Supplier.findById(gpuUpdate.supplierId).exec();
                if (!supplier) {
                    throw new UserInputError('Invalid Supplier')
                } else {
                    gpuUpdate.supplier = supplier;
                }
            }

            const gpuId = gpuUpdate.id;
            delete gpuUpdate.id;
            delete gpuUpdate.supplierId;

            const updatedGPU = GPU.findOneAndUpdate(
                { _id: gpuId},
                gpuUpdate,
                { returnOriginal: false}
            )

            return updatedGPU;
        },

        deleteOneGPU: async (_, { id }) => {
            await GPU.findOneAndDelete({ _id: id });

            return GPU.find();
        },
    }
}