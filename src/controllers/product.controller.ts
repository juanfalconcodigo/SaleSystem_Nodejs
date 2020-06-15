import { Request, Response } from "express";
import { UploadedFile } from 'express-fileupload';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
//user fs-extra en caso quieras usar await
import { Product } from "../models";

class ProductController {

    constructor() {

    }

    async get(req: Request, res: Response) {
        try {
            const { idProduct } = req.params;
            const product = await Product.findById(idProduct);
            return res.status(200).json({
                ok: true,
                product
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const products = await Product.find({}).sort({ name: 1 });
            return res.status(200).json({
                ok: true,
                products
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
            const { name, price, category, quantity } = req.body;
            const photo = <UploadedFile>req.files?.photo;
            const namePhoto = `${uuidv4().toLowerCase()}${path.extname(photo.name)}`;
            const newProduct = new Product({ name, price, category, quantity, photo: namePhoto });
            const product = await newProduct.save();
            await photo.mv(`src/uploads/products/${namePhoto}`);
            return res.status(201).json({
                ok: true,
                product
            });

        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

    async getImage(req: Request, res: Response) {
        try {
            const { img } = req.params;
            const route = path.join(__dirname, './../uploads/products/', img);
            if (!fs.existsSync(route)) {
                return res.sendFile(path.join(__dirname, './../uploads/products/', 'no-photo.png'));
            }
            return res.sendFile(route);
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

}

export default ProductController