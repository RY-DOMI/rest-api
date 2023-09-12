import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IDelivery } from "../models";
import Delivery from "../models/Delivery";

export default class DeliveryService extends Service<IDelivery> {
  constructor() {
    super();
  }

  async create(data: IDelivery): Promise<IDelivery> {
    return new Promise(async (resolve, reject) => {
      await Delivery.create(data)
        .then((res) => resolve(<IDelivery>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IDelivery[]> {
    return new Promise(async (resolve, reject) => {
      await Delivery.find(filter)
        .then((res) => resolve(<IDelivery[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IDelivery> {
    return new Promise(async (resolve, reject) => {
      await Delivery.findOne(filter)
        .then((res) => resolve(<IDelivery>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IDelivery): Promise<IDelivery> {
    return new Promise(async (resolve, reject) => {
      await Delivery.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IDelivery>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IDelivery> {
    return new Promise(async (resolve, reject) => {
      await Delivery.findOneAndDelete(filter)
        .then((res) => resolve(<IDelivery>res))
        .catch((err) => reject(err));
    });
  }
}
