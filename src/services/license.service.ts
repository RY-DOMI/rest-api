import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ILicense } from "../models";
import License from "../models/License";

export default class LicenseService extends Service<ILicense> {
  constructor() {
    super();
  }

  async create(data: ILicense): Promise<ILicense> {
    return new Promise(async (resolve, reject) => {
      await License.create(data)
        .then((res) => resolve(<ILicense>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ILicense[]> {
    return new Promise(async (resolve, reject) => {
      await License.find(filter)
        .then((res) => resolve(<ILicense[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ILicense> {
    return new Promise(async (resolve, reject) => {
      await License.findOne(filter)
        .then((res) => resolve(<ILicense>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ILicense): Promise<ILicense> {
    return new Promise(async (resolve, reject) => {
      await License.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ILicense>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ILicense> {
    return new Promise(async (resolve, reject) => {
      await License.findOneAndDelete(filter)
        .then((res) => resolve(<ILicense>res))
        .catch((err) => reject(err));
    });
  }
}
