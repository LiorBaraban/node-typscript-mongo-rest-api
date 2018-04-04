    import * as express from 'express';
    import BaseRouter from './base';
    import DataHandler from '../dal/dal';

export default class CustomersRouter extends BaseRouter {

    constructor(backUrl?:string) {
        super();
        this.router = express.Router();
        this.setUrl(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware(): void {
        //throw new Error("Method not implemented.");
        //ignore
    }

    setRoutes(): void {
        this.router.get('/', async(req, res) => {
            var customers = await DataHandler.instance.getAllCustomers();
            console.log(customers);
            if (customers != null){
                res.json(customers);
            }
            else{
                res.json({
                    message: "PROBLEM"
                })
            }
        });

        this.router.get('/:id', async (req, res) => {
            try {
                let id = req.params.id;
                let customer = await DataHandler.instance.getCustomer(id);
                console.log('router success');
                res.json(customer);
            } 
            catch (e) {
                console.log('router error');
                console.log(e);
                res.json({
                    message: "ERROR"
                });
            }
        });

        //todo - change to post
        this.router.get('/new/:name', async (req,res)=>{
            try{
                let name:string = req.params.name;
                await DataHandler.instance.addCustomer(name);
                console.log('router success');
                // res.json({
                //     message: "created customer successfully"
                // });
                res.redirect(`${this.url}/`);
            }
            catch(e){
                console.log('router error');
                console.log(e);
                res.json({
                    message: "ERROR"
                });
            }
        })
    }
}

// name		url				verb		desc
// index		/dogs			GET		Display a list of all dogs
// new			/dogs/new		GET		Display form to make a new dog
// create		/dogs			POST	Add new dog to db + redirect
// show		/dogs/:id 		GET		Shows details about one dog
// edit		/dogs/:id/edit	GET		Shows edit form for one dog
// update		/dogs/:id 		PUT		Update dog to db + redirect
// destroy		/dogs/:id 		DELETE	Delete a dog from db + redirect

