import * as express from 'express';
import UrlRouter from './urlrouter';
import DataHandler from '../dal/dal';
import { Types } from 'mongoose';
import { Request, Response } from 'express';

export default class ProductsRouter extends UrlRouter {
    constructor(backUrl?:string) {
        super(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware(): void {
        //throw new Error("Method not implemented.");
    }

    setRoutes(): void {
        this.router.get('/', this.getAllProducts);
    }

    async getAllProducts(req: Request, res: Response){
        var products = await DataHandler.instance.getAllProducts();
        if (products != null) {
            res.json(products);
        }
        else {
            res.json({
                message: "Error"
            })
        }
    }
}