import { Request, Response } from "express";
import { Sale } from '../models';
import { validQuantity } from "../helpers";

class SaleController {

    constructor() {

    }

    async getAll(req: Request, res: Response) {

        try {
            const sales = await Sale.find({}).populate('client').populate('products.product');
            return res.status(200).json({
                ok: true,
                sales
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

    }

    async get(req: Request, res: Response) {
        try {
            const { idSale } = req.params;
            const sale = await Sale.findById(idSale);
            return res.status(200).json({
                ok: true,
                sale
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }





    async post(req: Request, res: Response) {

        try {
            //falta validar que no se ejecute la venta si un producto falla
            const { totalValue, client, products } = req.body;
            await validQuantity(products, async (resp: any) => {
                if (resp === false) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: `No hay productos para guardar`
                        }
                    });
                }


                const newSale = new Sale({
                    totalValue,
                    client,
                    products: resp
                });
                newSale.createdAt = await newSale._id.getTimestamp();
                const sale = await (await newSale.save()).populate('client').populate('products.product').execPopulate();
                return res.status(201).json({
                    ok: true,
                    sale
                });
            });



        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }



}

export default SaleController;