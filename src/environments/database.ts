import mongoose from 'mongoose';
import { DATABASE_URL } from './environment';

const connection = async (): Promise<Boolean> => {
    try {
        await mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        console.log("<<<<<< Success conection database >>>>>>>>>");
        return true;
    } catch (err) {
        console.log("<<<<<< Failed conection database >>>>>>>>>")
        return false;
    }
}

export {
    connection
}