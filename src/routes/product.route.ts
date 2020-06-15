import { Router } from 'express';
import { ProductController } from '../controllers';
import { authVerify, uploadImage } from '../middlewares';


class ProductRouter {
    router: Router;
    private productController: ProductController;

    constructor() {
        this.router = Router();
        this.productController = new ProductController();
        this.routes();
    }

    routes() {
        this.router.route('/').get(authVerify, this.productController.getAll);
        this.router.route('/:idProduct').get(authVerify, this.productController.get);
        this.router.route('/').post([authVerify, uploadImage], this.productController.post);
        this.router.route('/photo/:img').get(authVerify, this.productController.getImage);
    }
}

export default ProductRouter;