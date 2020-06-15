import { Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    category: string;
    quantity: number;
    photo: string;
}

export {
    IProduct
}
