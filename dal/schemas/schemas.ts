import * as mongoose from 'mongoose'
import CustomerSchema from './customerschema'
import ProductSchema from './productschema'

export class Schemas{
    public customerSchema: mongoose.Schema
    public productSchema: mongoose.Schema
    constructor(){
        //TODO - try to make customer, product, etc. 'schema' a generic class -> use factory + strategy design patterns
        this.customerSchema = CustomerSchema.getSchema();
        this.productSchema = ProductSchema.getSchema();
    }   
}