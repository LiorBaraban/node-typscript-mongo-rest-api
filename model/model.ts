import * as mongoose from 'mongoose';
import { IProductModel } from './product';
import { ICustomerModel } from './customer';

export default class Model{
    Product: mongoose.Model<IProductModel>;
    Customer: mongoose.Model<ICustomerModel>;
}