import * as mongoose from 'mongoose'
import { Schemas } from '../model/schemas';
import { ICustomerModel } from '../model/customer'
import { IProductModel } from '../model/product'
import Model from '../model/model';

export default class DataHandler {
    private static _instance: DataHandler;

    private connectionString: string;

    private connection: mongoose.Connection;

    private schemas: Schemas;

    private model: Model;

    private constructor() {
        let appconfig = require('../appconfig.json');
        this.connectionString = appconfig.connectionString;
        this.connection = mongoose.createConnection(this.connectionString);
        this.schemas = new Schemas();
        this.model = new Model();
        this.model.Customer = this.connection.model<ICustomerModel>("Customer", this.schemas.customerSchema);
        this.model.Product = this.connection.model<IProductModel>("Product", this.schemas.productSchema);
    }

    public static get instance() {
        if (this._instance == null) {
            this._instance = new DataHandler();
        }
        return this._instance;
    }

    public async getAllCustomers() {
        try {
            var allcustomers = await this.model.Customer.find({}).populate('product');
            console.log(allcustomers);
            return {customers: allcustomers};
        }
        catch(e) {
            console.log(e);
        }
    }
    
    public async getCustomer(id: string) {
        try {
            var customer = await this.model.Customer.findById(id).populate('product');
            console.log('dal success');
            return customer;
        }
        catch (e) {
            console.log('dal error');
            console.log(e);
        }
    }

    public async addCustomer(userName: string) {
        try {
            var resProduct = await this.model.Product.findOne({ name: "Hammer" });
            if (resProduct != null){
                console.log(resProduct);
                var resProductID = resProduct._id;
                
                var newCustomer = {
                    name: userName,
                    product: resProductID
                }

                await this.model.Customer.create(newCustomer);
                console.log('dal success');
            }
            else{
                throw new Error('resProduct is null');
            }
        }
        catch (e) {
            console.log('dal fail');
            console.log(e);
        }
    }

    public async getAllProducts(){
        try{
            var allproducts = await this.model.Product.find({});
            console.log(allproducts);
            return {products: allproducts};
        }
        catch(e){
            console.log(e);
        }
    }


    public async testConnection() {
        try {
            var res = await this.model.Customer.create({
                name: "Lior"
            });
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }
}

