import * as mongoose from 'mongoose'

//this is to the outside - for a 'collection' in the consumer
export interface ICustomer {
    name: String;
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" };
}

// this is for the schema definition
export class CustomerSchemaDef implements ICustomer {
    name: any;
    product: any;

    constructor() {
        this.name = String;
        this.product = { type: mongoose.Schema.Types.ObjectId, ref: "Product" };;
    }
}

//this if for the mongoose model definitions in the dal
export interface ICustomerModel extends ICustomer, mongoose.Document {

}