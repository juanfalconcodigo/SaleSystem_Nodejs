import {Router} from 'express';
import { AuthController } from '../controllers';

class AuthRouter{
    router:Router;
    private authController:AuthController;
    constructor(){
        this.router=Router();
        this.authController=new AuthController();
        this.routes();
    }

    routes(){
        this.router.route('/signin').post(this.authController.signin);
    }
}

export default AuthRouter;