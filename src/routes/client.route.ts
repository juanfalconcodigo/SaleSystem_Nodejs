import { Router } from 'express';
import { ClientController } from '../controllers';
import { authVerify } from '../middlewares';

class ClientRouter {
    router: Router;
    private clientController:ClientController;

    constructor(){
        this.router=Router();
        this.clientController=new ClientController();
        this.routes();
    }

    routes(){
        this.router.route('/').get(authVerify,this.clientController.getAll);
        this.router.route('/:idClient').get(authVerify,this.clientController.get);
        this.router.route('/').post(authVerify,this.clientController.post);
    }
}

export default ClientRouter;