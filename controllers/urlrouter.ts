import BaseRouter from "./baserouter";

export default abstract class UrlRouter extends BaseRouter{

    // TODO - maybe change the idea of url into a list of urls containing the breadcrumbs
    // in a way that you could navigate to parent / grand-parent...
    
    public url: string;

    constructor(backUrl?: string){
        super();
        this.setUrl(backUrl);
    }

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