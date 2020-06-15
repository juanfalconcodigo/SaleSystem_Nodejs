import {Document} from 'mongoose';

interface IUser extends Document{
    name:string;
    lastName:string;
    phone:string;
    email:string;
    userName:string;
    password:string;
    status:boolean;
    createdAt:Date;
}

export{
    IUser
}