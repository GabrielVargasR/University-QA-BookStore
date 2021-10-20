import * as express from 'express';
import Logger from './common/logger';

class Api {

    public express: express.Application;
    private log: Logger;
    private db : any;

    constructor() {
        this.log = new Logger();
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use('/test', (req,res,next) => {
            res.send("<h2>Everything looks great</h2>");
        });

        this.express.use('*', (req,res,next) => {
            res.send("<h2>Invalid request</h2>");
        });
    }
}

export default new Api().express;