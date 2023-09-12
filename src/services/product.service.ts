import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IProduct } from "../models";
import Product from "../models/Product";

export default class ProductService extends Service<IProduct> {
  constructor() {
    super();
  }

  async create(data: IProduct): Promise<IProduct> {
    return new Promise(async (resolve, reject) => {
      await Product.create(data)
        .then((res) => resolve(<IProduct>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IProduct[]> {
    return new Promise(async (resolve, reject) => {
      await Product.find(filter)
        .then((res) => resolve(<IProduct[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IProduct> {
    return new Promise(async (resolve, reject) => {
      await Product.findOne(filter)
        .then((res) => resolve(<IProduct>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IProduct): Promise<IProduct> {
    return new Promise(async (resolve, reject) => {
      await Product.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IProduct>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IProduct> {
    return new Promise(async (resolve, reject) => {
      await Product.findOneAndDelete(filter)
        .then((res) => resolve(<IProduct>res))
        .catch((err) => reject(err));
    });
  }
}
