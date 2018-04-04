import * as mongoose from 'mongoose'

export default class ProductSchema {

    private static _instance: ProductSchema;

    private productSchema: mongoose.Schema;

    private constructor() {
        this.productSchema = new mongoose.Schema({
            name: String,
            price: Number
        });
    }

    public static getSchema(){
        if (this._instance == null){
            this._instance = new ProductSchema();
        }
        return this._instance.productSchema;
    }
}

export interface IProduct {
    name: string;
    price: number;
}

export interface IProductModel extends IProduct, mongoose.Document {

}