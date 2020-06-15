import {hashSync,genSaltSync} from 'bcrypt';

const encrypt=(value:string):string=>{
    const salt=genSaltSync(10);
    return hashSync(value,salt);
}

export default encrypt;