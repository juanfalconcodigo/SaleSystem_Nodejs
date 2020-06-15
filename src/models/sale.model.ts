import { Schema, model } from 'mongoose';
import { ISale } from '../interfaces';

const saleSchema = new Schema({
    createdAt: {
        type: Number,
        required: true
    },
    totalValue: {
        type: Number,
        required: [true, 'En necesario el valor total de la venta']
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
});

export default model<ISale>('sale', saleSchema);