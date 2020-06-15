import jwt from 'jsonwebtoken';
import { JWT_SECRET,EXPIRES } from '../environments/environment';

const generationToken=(user:any)=>{
    return jwt.sign({user},JWT_SECRET,{expiresIn:EXPIRES});
}

export default generationToken;