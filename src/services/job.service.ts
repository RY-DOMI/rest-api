import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IJob } from "../models";
import Job from "../models/Job";

export default class JobService extends Service<IJob> {
  constructor() {
    super();
  }

  async create(data: IJob): Promise<IJob> {
    return new Promise(async (resolve, reject) => {
      await Job.create(data)
        .then((res) => resolve(<IJob>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IJob[]> {
    return new Promise(async (resolve, reject) => {
      await Job.find(filter)
        .then((res) => resolve(<IJob[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IJob> {
    return new Promise(async (resolve, reject) => {
      await Job.findOne(filter)
        .then((res) => resolve(<IJob>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IJob): Promise<IJob> {
    return new Promise(async (resolve, reject) => {
      await Job.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IJob>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IJob> {
    return new Promise(async (resolve, reject) => {
      await Job.findOneAndDelete(filter)
        .then((res) => resolve(<IJob>res))
        .catch((err) => reject(err));
    });
  }
}
