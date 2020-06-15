import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../environments/environment';

const authVerify = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = <string>req.get('token') || <string>req.query.token;
        if (!token) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: `Necesita el token para obtener acceso a estos recursos`
                }
            });
        }
        const decoded: any = await jwt.verify(token, JWT_SECRET);
        (<any>req).user = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({
            ok: false,
            err: {
                message: `Token incorrecto`
            }
        });
    }
}

export default authVerify;