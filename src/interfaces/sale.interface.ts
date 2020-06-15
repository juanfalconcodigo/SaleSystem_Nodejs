import { Document } from 'mongoose';
import { IClient, IProduct } from '.';
interface ISale extends Document {
    createdAt: number;
    totalValue: number;
    client: IClient;
    products: Array<{ product: IProduct, quantity: number }>;
}

export {
    ISale
}