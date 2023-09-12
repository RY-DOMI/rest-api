import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IDevice } from "../models";
import Device from "../models/Device";

export default class DeviceService extends Service<IDevice> {
  constructor() {
    super();
  }

  async create(data: IDevice): Promise<IDevice> {
    return new Promise(async (resolve, reject) => {
      await Device.create(data)
        .then((res) => resolve(<IDevice>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IDevice[]> {
    return new Promise(async (resolve, reject) => {
      await Device.find(filter)
        .then((res) => resolve(<IDevice[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IDevice> {
    return new Promise(async (resolve, reject) => {
      await Device.findOne(filter)
        .then((res) => resolve(<IDevice>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IDevice): Promise<IDevice> {
    return new Promise(async (resolve, reject) => {
      await Device.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IDevice>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IDevice> {
    return new Promise(async (resolve, reject) => {
      await Device.findOneAndDelete(filter)
        .then((res) => resolve(<IDevice>res))
        .catch((err) => reject(err));
    });
  }
}
