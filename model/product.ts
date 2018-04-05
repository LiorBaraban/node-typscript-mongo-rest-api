import * as mongoose from 'mongoose'

// export default class ProductSchema {

//     private static _instance: ProductSchema;

//     private productSchema: mongoose.Schema;

//     private constructor() {
//         this.productSchema = new mongoose.Schema(<IproductSchemaDef>{});
//     }

//     public static getSchema(){
//         if (this._instance == null){
//             this._instance = new ProductSchema();
//         }
//         return this._instance.productSchema;
//     }
// }

export interface IProduct{
    name: String;
    price: Number;
}

export interface IproductSchemaDef extends IProduct, mongoose.SchemaDefinition{

}

export class ProductSchemaDef implements IproductSchemaDef{
    [path: string]: mongoose.SchemaTypeOpts<any> | mongoose.Schema | mongoose.SchemaType;
    name: String;
    price: Number;
    
}

export interface IProductModel extends IProduct, mongoose.Document {

}