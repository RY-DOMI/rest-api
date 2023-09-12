import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ISalary } from "../models";
import Salary from "../models/Salary";

export default class SalaryService extends Service<ISalary> {
  constructor() {
    super();
  }

  async create(data: ISalary): Promise<ISalary> {
    return new Promise(async (resolve, reject) => {
      await Salary.create(data)
        .then((res) => resolve(<ISalary>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ISalary[]> {
    return new Promise(async (resolve, reject) => {
      await Salary.find(filter)
        .then((res) => resolve(<ISalary[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ISalary> {
    return new Promise(async (resolve, reject) => {
      await Salary.findOne(filter)
        .then((res) => resolve(<ISalary>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ISalary): Promise<ISalary> {
    return new Promise(async (resolve, reject) => {
      await Salary.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ISalary>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ISalary> {
    return new Promise(async (resolve, reject) => {
      await Salary.findOneAndDelete(filter)
        .then((res) => resolve(<ISalary>res))
        .catch((err) => reject(err));
    });
  }
}
