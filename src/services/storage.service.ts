import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IStorage } from "../models";
import Storage from "../models/Storage";

export default class StorageService extends Service<IStorage> {
  constructor() {
    super();
  }

  async create(data: IStorage): Promise<IStorage> {
    return new Promise(async (resolve, reject) => {
      await Storage.create(data)
        .then((res) => resolve(<IStorage>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IStorage[]> {
    return new Promise(async (resolve, reject) => {
      await Storage.find(filter)
        .then((res) => resolve(<IStorage[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IStorage> {
    return new Promise(async (resolve, reject) => {
      await Storage.findOne(filter)
        .then((res) => resolve(<IStorage>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IStorage): Promise<IStorage> {
    return new Promise(async (resolve, reject) => {
      await Storage.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IStorage>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IStorage> {
    return new Promise(async (resolve, reject) => {
      await Storage.findOneAndDelete(filter)
        .then((res) => resolve(<IStorage>res))
        .catch((err) => reject(err));
    });
  }
}
