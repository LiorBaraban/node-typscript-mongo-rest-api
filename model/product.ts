import * as mongoose from 'mongoose'

// for 'client' hold a collection
export interface IProduct{
    name: String;
    price: Number;
}

// for schema definition
export class ProductSchemaDef implements IProduct{
    name: any;
    price: any;
    
    constructor(){
        this.name = String;
        this.price =  Number;
    }
}

// for dal
export interface IProductModel extends IProduct, mongoose.Document {

}