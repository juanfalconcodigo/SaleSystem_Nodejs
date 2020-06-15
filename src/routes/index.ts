import { Router } from 'express';
import UserRouter from "./user.route";
import AuthRouter from './auth.route';
import ProductRouter from './product.route';
import ClientRouter from './client.route';
import SaleRouter from './sale.route';

const router = Router();

router.use('/user', new UserRouter().router);
router.use('/auth', new AuthRouter().router);
router.use('/product', new ProductRouter().router);
router.use('/client', new ClientRouter().router);
router.use('/sale', new SaleRouter().router);

export default router;
