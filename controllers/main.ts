import * as express from 'express';
import UrlRouter from './urlrouter';
import { Request, Response } from 'express';

export default class MainRouter extends UrlRouter {

    constructor(backUrl?: string) {
        super(backUrl);
        // this.router = express.Router();
        // this.setUrl(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware(): void {
        // throw new Error("Method not implemented.");
    }

    setRoutes(): void {
        this.router.get('/', this.getMainMessage);
    }

    async getMainMessage(req: Request, res: Response) {
        try {
            res.json({
                message: 'Main'
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                message: 'ERROR'
            });
        }
    }
}