import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IPermission } from "../models";
import Permission from "../models/Permission";

export default class PermissionService extends Service<IPermission> {
  constructor() {
    super();
  }

  async create(data: IPermission): Promise<IPermission> {
    return new Promise(async (resolve, reject) => {
      await Permission.create(data)
        .then((res) => resolve(<IPermission>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IPermission[]> {
    return new Promise(async (resolve, reject) => {
      await Permission.find(filter)
        .then((res) => resolve(<IPermission[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IPermission> {
    return new Promise(async (resolve, reject) => {
      await Permission.findOne(filter)
        .then((res) => resolve(<IPermission>res))
        .catch((err) => reject(err));
    });
  }
  async update(
    filter: FilterQuery<any>,
    data: IPermission
  ): Promise<IPermission> {
    return new Promise(async (resolve, reject) => {
      await Permission.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IPermission>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IPermission> {
    return new Promise(async (resolve, reject) => {
      await Permission.findOneAndDelete(filter)
        .then((res) => resolve(<IPermission>res))
        .catch((err) => reject(err));
    });
  }
}
