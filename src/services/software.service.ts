import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ISoftware } from "../models";
import Software from "../models/Software";

export default class SoftwareService extends Service<ISoftware> {
  constructor() {
    super();
  }

  async create(data: ISoftware): Promise<ISoftware> {
    return new Promise(async (resolve, reject) => {
      await Software.create(data)
        .then((res) => resolve(<ISoftware>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ISoftware[]> {
    return new Promise(async (resolve, reject) => {
      await Software.find(filter)
        .then((res) => resolve(<ISoftware[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ISoftware> {
    return new Promise(async (resolve, reject) => {
      await Software.findOne(filter)
        .then((res) => resolve(<ISoftware>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ISoftware): Promise<ISoftware> {
    return new Promise(async (resolve, reject) => {
      await Software.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ISoftware>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ISoftware> {
    return new Promise(async (resolve, reject) => {
      await Software.findOneAndDelete(filter)
        .then((res) => resolve(<ISoftware>res))
        .catch((err) => reject(err));
    });
  }
}
