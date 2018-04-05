import * as mongoose from 'mongoose'
import { ICustomerSchemaDef } from './customer'
import { IproductSchemaDef } from './product'

export class Schemas {
    public customerSchema: mongoose.Schema
    public productSchema: mongoose.Schema
    constructor() {
        this.customerSchema = new mongoose.Schema({
            name: String,
            product: mongoose.Types.ObjectId
        });
        this.productSchema = new mongoose.Schema({
            name: String,
            price: Number
        });
    }
}