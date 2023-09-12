import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IWarehouse } from "../models";
import Warehouse from "../models/Warehouse";

export default class WarehouseService extends Service<IWarehouse> {
  constructor() {
    super();
  }

  async create(data: IWarehouse): Promise<IWarehouse> {
    return new Promise(async (resolve, reject) => {
      await Warehouse.create(data)
        .then((res) => resolve(<IWarehouse>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IWarehouse[]> {
    return new Promise(async (resolve, reject) => {
      await Warehouse.find(filter)
        .then((res) => resolve(<IWarehouse[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IWarehouse> {
    return new Promise(async (resolve, reject) => {
      await Warehouse.findOne(filter)
        .then((res) => resolve(<IWarehouse>res))
        .catch((err) => reject(err));
    });
  }
  async update(
    filter: FilterQuery<any>,
    data: IWarehouse
  ): Promise<IWarehouse> {
    return new Promise(async (resolve, reject) => {
      await Warehouse.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IWarehouse>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IWarehouse> {
    return new Promise(async (resolve, reject) => {
      await Warehouse.findOneAndDelete(filter)
        .then((res) => resolve(<IWarehouse>res))
        .catch((err) => reject(err));
    });
  }
}
