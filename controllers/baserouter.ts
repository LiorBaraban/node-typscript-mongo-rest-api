import * as express from 'express'
import { Router } from 'express';
export default abstract class BaseRouter {

    public router: express.Router;

    constructor() {
        this.router = express.Router();
    }

    abstract setMiddleware(): void;
    abstract setRoutes(): void;
}