import * as express from 'express'
import { Router } from 'express';
export default abstract class BaseRouter {
    
    public router: express.Router;
    
    // TODO - maybe change the idea of url into a list of urls containing the breadcrumbs
    // in a way that you could navigate to parent / grand-parent...

    public url: string;

    // TODO - check if this class can have a ctor ?  

    // constructor(){
    //     this.router = express.Router();
    //     this.setMiddleware();
    //     this.setRoutes();
    // }
    setUrl(backUrl?: string) {
        if (backUrl != null) {
            this.url = backUrl;
            if (backUrl != "/") {
                this.url += "/"
            }
            let routerName = this.constructor.name;
            routerName = routerName.toLowerCase();
            routerName = routerName.replace('router', '');
            this.url += routerName;
            console.log('created: ' + this.url);
        }
        else {
            this.url = "/";
            console.log('created: ' + this.url + ' (root)');
        }
    }
    abstract setMiddleware(): void;
    abstract setRoutes(): void;
}