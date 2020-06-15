import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './environments/environment';
import routes from './routes';
import fileUpload  from 'express-fileupload';
import compression from 'compression';
/* import path from 'path'; */

class Server {

    private app: Application;
    private port: number;
    private static _instance: Server;


    private constructor() {
        this.app = express();
        this.port = PORT;
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        /* this.app.use(express.static(path.join(__dirname,'/uploads'))); */
        this.app.use(fileUpload());
        this.app.use(compression());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(morgan('dev'));
    }

    private routes() {
        this.app.use('/v1/api', routes);
    }

    static get instance() {
        return this._instance || (this._instance = new this());
    }

    listen() {
        this.app.listen(this.port, (err) => {
            if (err) throw new Error(err);
            console.log(`http://localhost:${this.port}/`);
        });
    }

}

export default Server;