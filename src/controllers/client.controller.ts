import { Request, Response } from "express";
import { Client } from '../models';
import { Schema } from "mongoose";
class ClientController {

    constructor() {

    }

    async getAll(req: Request, res: Response) {
        try {
            const clients = await Client.find({});
            return res.status(200).json({
                ok: true,
                clients
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
            const { idClient } = req.params;
            const client = await Client.findById(idClient);
            return res.status(200).json({
                ok: true,
                client
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
            const { name, address, phone } = req.body;
            const newClient = new Client({ name, address, phone });
            const client = await newClient.save();
            return res.status(201).json({
                ok: true,
                client
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

}

export default ClientController;