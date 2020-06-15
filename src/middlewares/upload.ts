import { NextFunction, Response, Request } from "express";
import { UploadedFile } from "express-fileupload";
import path from 'path';
import { PHOTO_SIZE_LIMIT } from "../environments/environment";

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {

    //control de ingreso de imagen
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No ingreso la imagen'
            }
        });
    }

    //control de nombre de campo de imagen
    if(!req.files.photo){
        return res.status(400).json({
            ok:false,
            err:{
                message:`Verique nombre de campo photo`
            }
        })
    }

    const valuesValid = /jpg|png|jpeg|gif/;
    const photo = <UploadedFile>req.files.photo;
    const mimetype = valuesValid.test(photo.mimetype);
    const test = valuesValid.test(path.extname(photo.name).toLowerCase());

    //control de formato de imagen
    if (!(test && mimetype)) {
        return res.status(400).json({
            ok: false,
            err: {
                message: `Formato inválido solo se acepta los siguientes formatos : ${valuesValid}`
            }
        });
    }

    //control de peso de imagen
    if (photo.size > PHOTO_SIZE_LIMIT) {
        return res.status(400).json({
            ok: false,
            err: {
                message: `Exedió el limite de peso permitido máximo : ${PHOTO_SIZE_LIMIT} bytes`
            }
        });
    }

    next();
}

export default uploadImage;