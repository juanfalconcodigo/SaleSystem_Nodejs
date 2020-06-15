import { Request, Response } from "express";
import {User} from '../models';
import { verify ,generationToken} from "../helpers";


class AuthController {
    constructor() {

    }

    async signin(req: Request, res: Response) {

        const { email, password } = req.body;
        User.findOne({ email }).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: `Verifique sus datos`
                    }
                });
            }
            if(!user){
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: `Email* o password incorrecto`
                    }
                });
            }
            if(!verify(password,user.password)){
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: `Email o password* incorrecto`
                    }
                });
            }
            const token=generationToken(user);
            return res.status(202).json({
                ok: true,
                user,
                token
            });
        });

    }
}

export default AuthController;