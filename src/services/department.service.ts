import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IDepartment } from "../models";
import Department from "../models/Department";

export default class DepartmentService extends Service<IDepartment> {
  constructor() {
    super();
  }

  async create(data: IDepartment): Promise<IDepartment> {
    return new Promise(async (resolve, reject) => {
      await Department.create(data)
        .then((res) => resolve(<IDepartment>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IDepartment[]> {
    return new Promise(async (resolve, reject) => {
      await Department.find(filter)
        .then((res) => resolve(<IDepartment[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IDepartment> {
    return new Promise(async (resolve, reject) => {
      await Department.findOne(filter)
        .then((res) => resolve(<IDepartment>res))
        .catch((err) => reject(err));
    });
  }
  async update(
    filter: FilterQuery<any>,
    data: IDepartment
  ): Promise<IDepartment> {
    return new Promise(async (resolve, reject) => {
      await Department.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IDepartment>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IDepartment> {
    return new Promise(async (resolve, reject) => {
      await Department.findOneAndDelete(filter)
        .then((res) => resolve(<IDepartment>res))
        .catch((err) => reject(err));
    });
  }
}
