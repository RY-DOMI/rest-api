import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ISupplier } from "../models";
import Supplier from "../models/Supplier";

export default class SupplierService extends Service<ISupplier> {
  constructor() {
    super();
  }

  async create(data: ISupplier): Promise<ISupplier> {
    return new Promise(async (resolve, reject) => {
      await Supplier.create(data)
        .then((res) => resolve(<ISupplier>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ISupplier[]> {
    return new Promise(async (resolve, reject) => {
      await Supplier.find(filter)
        .then((res) => resolve(<ISupplier[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ISupplier> {
    return new Promise(async (resolve, reject) => {
      await Supplier.findOne(filter)
        .then((res) => resolve(<ISupplier>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ISupplier): Promise<ISupplier> {
    return new Promise(async (resolve, reject) => {
      await Supplier.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ISupplier>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ISupplier> {
    return new Promise(async (resolve, reject) => {
      await Supplier.findOneAndDelete(filter)
        .then((res) => resolve(<ISupplier>res))
        .catch((err) => reject(err));
    });
  }
}
