import { Router } from "express";
import { SaleController } from "../controllers";
import { authVerify } from "../middlewares";

class SaleRouter {

    router: Router;
    private saleController: SaleController;

    constructor() {
        this.router = Router();
        this.saleController = new SaleController();
        this.routes();
    }

    routes() {
        this.router.route('/').get(authVerify, this.saleController.getAll);
        this.router.route('/:idSale').get(authVerify, this.saleController.get);
        this.router.route('/').post(authVerify, this.saleController.post);
    }

}

export default SaleRouter;