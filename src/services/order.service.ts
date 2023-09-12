import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IOrder } from "../models";
import Order from "../models/Order";

export default class OrderService extends Service<IOrder> {
  constructor() {
    super();
  }

  async create(data: IOrder): Promise<IOrder> {
    return new Promise(async (resolve, reject) => {
      await Order.create(data)
        .then((res) => resolve(<IOrder>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IOrder[]> {
    return new Promise(async (resolve, reject) => {
      await Order.find(filter)
        .then((res) => resolve(<IOrder[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IOrder> {
    return new Promise(async (resolve, reject) => {
      await Order.findOne(filter)
        .then((res) => resolve(<IOrder>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IOrder): Promise<IOrder> {
    return new Promise(async (resolve, reject) => {
      await Order.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IOrder>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IOrder> {
    return new Promise(async (resolve, reject) => {
      await Order.findOneAndDelete(filter)
        .then((res) => resolve(<IOrder>res))
        .catch((err) => reject(err));
    });
  }
}
