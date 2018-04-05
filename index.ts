import * as http from "http";
import * as express from "express";
import * as bodyParser from 'body-parser';
import BaseRouter from "./controllers/baserouter";
import MainRouter from './controllers/main';
import customersRouter from './controllers/customers';
import productsRouter from './controllers/products'
import DataHandler from './dal/dal';
import CustomersRouter from "./controllers/customers";
import ProductsRouter from "./controllers/products";

class Server extends BaseRouter{
    //TODO add baseUrlRouter class with url inside it. keep server extending base, and controllers extending baseUrl
    app = express();
    server: http.Server;

    constructor() {
        super();
        this.router = express.Router();
        this.setMiddleware();
        this.setRoutes();
        this.listen();
    }

    setMiddleware(): void {
        this.router.use(bodyParser.json());
        this.router.use(bodyParser.urlencoded({ extended: false }));
    }

    setRoutes(): void{
        this.app.use('/',this.router);

        let mainRouter = new MainRouter();
        this.router.use('/', mainRouter.router);

        let customersRouter = new CustomersRouter(mainRouter.url);
        this.router.use('/customers', customersRouter.router)

        let productsRouter = new ProductsRouter(mainRouter.url);
        this.router.use('/products', productsRouter.router)
    }

    listen():void{
        this.app.listen(3000, () => {
            console.log('listening at 3000');
        });
    }
}

let server = new Server();

