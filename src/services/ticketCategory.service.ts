import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ITicketCategory } from "../models";
import TicketCategory from "../models/TicketCategory";

export default class TicketCategoryService extends Service<ITicketCategory> {
  constructor() {
    super();
  }

  async create(data: ITicketCategory): Promise<ITicketCategory> {
    return new Promise(async (resolve, reject) => {
      await TicketCategory.create(data)
        .then((res) => resolve(<ITicketCategory>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ITicketCategory[]> {
    return new Promise(async (resolve, reject) => {
      await TicketCategory.find(filter)
        .then((res) => resolve(<ITicketCategory[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ITicketCategory> {
    return new Promise(async (resolve, reject) => {
      await TicketCategory.findOne(filter)
        .then((res) => resolve(<ITicketCategory>res))
        .catch((err) => reject(err));
    });
  }
  async update(
    filter: FilterQuery<any>,
    data: ITicketCategory
  ): Promise<ITicketCategory> {
    return new Promise(async (resolve, reject) => {
      await TicketCategory.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ITicketCategory>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ITicketCategory> {
    return new Promise(async (resolve, reject) => {
      await TicketCategory.findOneAndDelete(filter)
        .then((res) => resolve(<ITicketCategory>res))
        .catch((err) => reject(err));
    });
  }
}
