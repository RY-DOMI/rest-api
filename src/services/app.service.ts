import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { IApp } from "../models";
import App from "../models/App";
import { hash, signJwt } from "../utils/authentication";

export default class AppService extends Service<IApp> {
  constructor() {
    super();
  }

  async create(data: IApp): Promise<IApp> {
    return new Promise(async (resolve, reject) => {
      console.log(data);

      await hash(data.token)
        .then(async (hashed) => {
          data.token = hashed;

          await App.create(data)
            .then((res) => resolve(<IApp>res))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<IApp[]> {
    return new Promise(async (resolve, reject) => {
      await App.find(filter)
        .then((res) => resolve(<IApp[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<IApp> {
    return new Promise(async (resolve, reject) => {
      await App.findOne(filter)
        .then((res) => resolve(<IApp>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: IApp): Promise<IApp> {
    return new Promise(async (resolve, reject) => {
      await App.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<IApp>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<IApp> {
    return new Promise(async (resolve, reject) => {
      await App.findOneAndDelete(filter)
        .then((res) => resolve(<IApp>res))
        .catch((err) => reject(err));
    });
  }

  async authenticate(data: IApp): Promise<String> {
    return new Promise(async (resolve, reject) => {
      this.get({ _id: data._id, name: data.name, token: data.token })
        .then((res) => {
          const payload = {
            softwareId: res._id,
          };
          resolve(signJwt(payload));
        })
        .catch((err) => reject(err));
    });
  }
}
