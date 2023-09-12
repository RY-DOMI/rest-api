import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IRole } from "../models";
import Role from "../models/Role";

export default class RoleService extends Service<IRole> {
  constructor() {
    super();
  }

  async create(data: IRole): Promise<IRole> {
    return new Promise(async (resolve, reject) => {
      await Role.create(data)
        .then((res) => resolve(<IRole>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IRole[]> {
    return new Promise(async (resolve, reject) => {
      await Role.find(filter)
        .then((res) => resolve(<IRole[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IRole> {
    return new Promise(async (resolve, reject) => {
      await Role.findOne(filter)
        .then((res) => resolve(<IRole>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IRole): Promise<IRole> {
    return new Promise(async (resolve, reject) => {
      await Role.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IRole>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IRole> {
    return new Promise(async (resolve, reject) => {
      await Role.findOneAndDelete(filter)
        .then((res) => resolve(<IRole>res))
        .catch((err) => reject(err));
    });
  }
}
