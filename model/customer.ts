import * as mongoose from 'mongoose'

//this is to the outside - for a 'collection' in the consumer
export interface ICustomer {
    name: String;
    product: mongoose.Schema.Types.ObjectId;
}

//this is for the schema definition in 'schemas'
export interface ICustomerSchemaDef extends ICustomer, mongoose.SchemaDefinition{

}

// a concrete implrmrntation of the schema class
// export class CustomerSchemaDef implements ICustomerSchemaDef{
//     [path: string]: mongoose.SchemaTypeOpts<any> | mongoose.Schema | mongoose.SchemaType;
//     name: String;
//     product: mongoose.Schema.Types.ObjectId;
// }

//this if for the mongoose model definitions in the dal
export interface ICustomerModel extends ICustomer, mongoose.Document {

}