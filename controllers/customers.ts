import * as express from 'express';
import UrlRouter from './urlrouter';
import DataHandler from '../dal/dal';
import { Request, Response } from 'express';

export default class CustomersRouter extends UrlRouter {

    constructor(backUrl?: string) {
        super(backUrl);
        this.setMiddleware();
        this.setRoutes();
    }

    setMiddleware(): void {
        //throw new Error("Method not implemented.");
        //ignore
    }


    setRoutes(): void {
        this.router.get('/', this.getAllCustomers.bind(this));
        this.router.get('/:id',this.getCustomerById.bind(this));
        //todo - change to post
        this.router.get('/new/:name', this.addNewCustomer.bind(this));
    }

    async getAllCustomers(req: Request, res: Response) {
        var customers = await DataHandler.instance.getAllCustomers();
        console.log(customers);
        if (customers != null) {
            res.json(customers);
        }
        else {
            res.json({
                message: "PROBLEM"
            })
        }
    }

    async getCustomerById(req: Request, res: Response) {
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
    }

    async addNewCustomer(req: Request, res: Response) {
        // bound 'this' for keeping execution context of 'this.url'

        try {
            let name: string = req.params.name;
            await DataHandler.instance.addCustomer(name);
            console.log('router success');
            res.redirect(`${this.url}/`);
        }
        catch (e) {
            console.log('router error');
            console.log(e);
            res.json({
                message: "ERROR"
            });
        }
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

