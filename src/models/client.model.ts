import { Schema, model } from 'mongoose';
import { IClient } from '../interfaces';

const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    address: {
        type: String,
        required: [true, 'La dirección es necesaria']
    },
    phone: {
        type: String,
        required: [true, 'El número de teléfono es necesario']
    }
});

export default model<IClient>('client', clientSchema);