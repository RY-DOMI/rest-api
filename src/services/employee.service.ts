import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IEmployee } from "../models";
import Employee from "../models/Employee";
import { hash, signJwt } from "../utils/authentication";

export default class EmployeeService extends Service<IEmployee> {
  constructor() {
    super();
  }

  async create(data: IEmployee): Promise<IEmployee> {
    return new Promise(async (resolve, reject) => {
      await hash(data.password)
        .then(async (hashed) => {
          data.password = hashed;

          await Employee.create(data)
            .then((res) => resolve(<IEmployee>res))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IEmployee[]> {
    return new Promise(async (resolve, reject) => {
      await Employee.find(filter)
        .then((res) => resolve(<IEmployee[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IEmployee> {
    return new Promise(async (resolve, reject) => {
      await Employee.findOne(filter)
        .then((res) => resolve(<IEmployee>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IEmployee): Promise<IEmployee> {
    return new Promise(async (resolve, reject) => {
      await Employee.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IEmployee>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IEmployee> {
    return new Promise(async (resolve, reject) => {
      await Employee.findOneAndDelete(filter)
        .then((res) => resolve(<IEmployee>res))
        .catch((err) => reject(err));
    });
  }
}
