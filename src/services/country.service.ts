import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ICountry } from "../models";
import Country from "../models/Country";

export default class CountryService extends Service<ICountry> {
  constructor() {
    super();
  }

  async create(data: ICountry): Promise<ICountry> {
    return new Promise(async (resolve, reject) => {
      await Country.create(data)
        .then((res) => resolve(<ICountry>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ICountry[]> {
    return new Promise(async (resolve, reject) => {
      await Country.find(filter)
        .then((res) => resolve(<ICountry[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ICountry> {
    return new Promise(async (resolve, reject) => {
      await Country.findOne(filter)
        .then((res) => resolve(<ICountry>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ICountry): Promise<ICountry> {
    return new Promise(async (resolve, reject) => {
      await Country.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ICountry>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ICountry> {
    return new Promise(async (resolve, reject) => {
      await Country.findOneAndDelete(filter)
        .then((res) => resolve(<ICountry>res))
        .catch((err) => reject(err));
    });
  }
}
