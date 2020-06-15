import { Document } from 'mongoose';

interface IClient extends Document {
    name: string;
    address: string;
    phone: string;
}

export {
    IClient
}