import * as mongoose from 'mongoose'
import { CustomerSchemaDef } from './customer'
import { ProductSchemaDef } from './product'

export class Schemas {
    public customerSchema: mongoose.Schema
    public productSchema: mongoose.Schema

    constructor() {
        this.customerSchema = new mongoose.Schema(this.createSchemaDef(new CustomerSchemaDef()));
        this.productSchema = new mongoose.Schema(this.createSchemaDef(new ProductSchemaDef()));
    }

    createSchemaDef(object: Object){
        // literal == schema definition
        let literal: mongoose.SchemaDefinition = {};
        Object.assign(literal,object);
        console.dir(object);
        console.dir(literal);
        return literal;
    }
}