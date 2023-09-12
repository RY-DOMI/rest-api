import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IAddress } from "../models";
import Address from "../models/Address";

export default class AddressService extends Service<IAddress> {
  constructor() {
    super();
  }

  async create(data: IAddress): Promise<IAddress> {
    return new Promise(async (resolve, reject) => {
      await Address.create(data)
        .then((res) => resolve(<IAddress>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IAddress[]> {
    return new Promise(async (resolve, reject) => {
      await Address.find(filter)
        .then((res) => resolve(<IAddress[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IAddress> {
    return new Promise(async (resolve, reject) => {
      await Address.findOne(filter)
        .then((res) => resolve(<IAddress>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IAddress): Promise<IAddress> {
    return new Promise(async (resolve, reject) => {
      await Address.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IAddress>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IAddress> {
    return new Promise(async (resolve, reject) => {
      await Address.findOneAndDelete(filter)
        .then((res) => resolve(<IAddress>res))
        .catch((err) => reject(err));
    });
  }
}
