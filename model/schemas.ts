import * as mongoose from 'mongoose'
import { CustomerSchemaDef }from './customer'
import { ProductSchemaDef } from './product'

export class Schemas{
    public customerSchema: mongoose.Schema
    public productSchema: mongoose.Schema
    constructor(){
        this.customerSchema = new mongoose.Schema(new CustomerSchemaDef());
        this.productSchema = new mongoose.Schema(new ProductSchemaDef());
    }   
}