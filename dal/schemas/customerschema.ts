import * as mongoose from 'mongoose'

export default class CustomerSchema {

    private static _instance: CustomerSchema;

    private customerSchema: mongoose.Schema;

    private constructor() {
        this.customerSchema = new mongoose.Schema({
            name: String,
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
        });
    }

    public static getSchema(){
        if (this._instance == null){
            this._instance = new CustomerSchema();
        }
        return this._instance.customerSchema;
    }
}

//this is to the outside - for a 'collection' in the consumer
export interface ICustomer {
    name: string;
    product: mongoose.Schema.Types.ObjectId;
}

//this if for the dal
export interface ICustomerModel extends ICustomer, mongoose.Document {

}