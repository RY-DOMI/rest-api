import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IProject } from "../models";
import Project from "../models/Project";

export default class ProjectService extends Service<IProject> {
  constructor() {
    super();
  }

  async create(data: IProject): Promise<IProject> {
    return new Promise(async (resolve, reject) => {
      await Project.create(data)
        .then((res) => resolve(<IProject>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IProject[]> {
    return new Promise(async (resolve, reject) => {
      await Project.find(filter)
        .then((res) => resolve(<IProject[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IProject> {
    return new Promise(async (resolve, reject) => {
      await Project.findOne(filter)
        .then((res) => resolve(<IProject>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IProject): Promise<IProject> {
    return new Promise(async (resolve, reject) => {
      await Project.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IProject>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IProject> {
    return new Promise(async (resolve, reject) => {
      await Project.findOneAndDelete(filter)
        .then((res) => resolve(<IProject>res))
        .catch((err) => reject(err));
    });
  }
}
