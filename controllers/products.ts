import * as express from 'express';
import BaseRouter from './base';
import DataHandler from '../dal/dal';
import { Types } from 'mongoose';

export default class ProductsRouter extends BaseRouter {
    constructor(backUrl?:string) {
        super();
        this.router = express.Router();
        this.setUrl(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }
    setMiddleware(): void {
        //throw new Error("Method not implemented.");
    }
    setRoutes(): void {
        this.router.get('/', async (req, res) => {
            var products = await DataHandler.instance.getAllProducts();
            if (products != null) {
                res.json(products);
            }
            else {
                res.json({
                    message: "Error"
                })
            }
        });


    }

}