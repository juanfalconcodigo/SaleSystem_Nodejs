import {Schema,model,Model} from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import {IUser} from '../interfaces';
const userShema=new Schema({
    name:{
        type:String,
        required:[true,'Su nombre es necesario']
    },
    lastName:{
        type:String,
        required:[true,'El apellido es necesario']
    },
    phone:{
        type:String,
        required:[true,'Su teléfono es necesario']
    },
    email:{
        type:String,
        required:[true,'Su correo es necesario'],
        unique:true
    },
    userName:{
        type:String,
        required:[true,'Su nombre de usuario es necesario']
    },
    password:{
        type:String,
        required:[true,'La contraseña es necesaria']
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

userShema.plugin(mongooseUniqueValidator,{message:'{PATH} deve ser único'})

export default model<IUser>('user',userShema);



