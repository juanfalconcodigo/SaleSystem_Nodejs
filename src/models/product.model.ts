import {Schema, model} from 'mongoose';
import {IProduct} from '../interfaces';
const productSchema=new Schema({
    name:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    price:{
        type:Number,
        required:[true,'El precio'],
        min:[1,'Mínimo precio para ingresar producto']
    },
    category:{
        type:String,
        required:[true,'La categoría es necesaria']
    },
    quantity:{
        type:Number,
        required:[true,'La cantidad es necesaria'],
        min:[1,'Mínimo ingrese 1 producto']
    },
    photo:{
        type:String,
        required:[true,'La foto es necesaria'],
    }
});

export default model<IProduct>('product',productSchema);