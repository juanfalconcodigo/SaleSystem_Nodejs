import { Request, Response } from "express";
import {User} from '../models';
import { encrypt } from "../helpers";

class UserController {
    constructor() {

    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await User.find({}).sort({ createdAt: -1 });
            return res.status(200).json({
                ok: true,
                users
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
            const { idUser } = req.params;
            const user = await User.findById(idUser);
            return res.status(200).json({
                ok: true,
                user
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
            const { name, lastName, phone, email, userName, password } = req.body;
            const newUser = new User({ name, lastName, phone, email, userName, password: encrypt(password) });
            const user = await newUser.save();
            return res.status(201).json({
                ok: true,
                user
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { idUser } = req.params;
            const { name, lastName, phone, email, userName } = req.body;
            const data = { name, lastName, phone, email, userName };
            const user = await User.findByIdAndUpdate(idUser, data, { context: 'query', new: true, runValidators: true });
            return res.status(202).json({
                ok: true,
                user
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { idUser } = req.params;
            const data = {
                status: false
            }
            const user = await User.findByIdAndUpdate(idUser, data, { context: 'query', new: true, runValidators: true });
            return res.status(202).json({
                ok: true,
                user
            });
        } catch (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
    }

}

export default UserController;