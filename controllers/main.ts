import * as express from 'express';
import BaseRouter from './base';

export default class MainRouter extends BaseRouter {

    constructor(backUrl?:string) {
        super();
        this.router = express.Router();
        this.setUrl(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware(): void {
        // throw new Error("Method not implemented.");
    }
    setRoutes(): void {
        this.router.get('/', (req, res) => {
            res.json({
                message: 'Main'
            });
        });
    }
}