import {Router} from 'express';
import { UserController } from '../controllers';
import { authVerify } from '../middlewares';

class UserRouter{
    router:Router;
    private userController:UserController;
    constructor(){
        this.router=Router();
        this.userController=new UserController();
        this.routes();
    }

    routes(){
        this.router.route('/').get(authVerify,this.userController.getAll);
        this.router.route('/:idUser').get(authVerify,this.userController.get);
        this.router.route('/').post(this.userController.post);
        this.router.route('/:idUser').put(authVerify,this.userController.update);
        this.router.route('/:idUser').delete(authVerify,this.userController.delete)
    }

}

export default UserRouter;