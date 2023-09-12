import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ITicketComment } from "../models";
import TicketComment from "../models/TicketComment";

export default class TicketCommentService extends Service<ITicketComment> {
  constructor() {
    super();
  }

  async create(data: ITicketComment): Promise<ITicketComment> {
    return new Promise(async (resolve, reject) => {
      await TicketComment.create(data)
        .then((res) => resolve(<ITicketComment>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ITicketComment[]> {
    return new Promise(async (resolve, reject) => {
      await TicketComment.find(filter)
        .then((res) => resolve(<ITicketComment[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ITicketComment> {
    return new Promise(async (resolve, reject) => {
      await TicketComment.findOne(filter)
        .then((res) => resolve(<ITicketComment>res))
        .catch((err) => reject(err));
    });
  }
  async update(
    filter: FilterQuery<any>,
    data: ITicketComment
  ): Promise<ITicketComment> {
    return new Promise(async (resolve, reject) => {
      await TicketComment.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ITicketComment>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ITicketComment> {
    return new Promise(async (resolve, reject) => {
      await TicketComment.findOneAndDelete(filter)
        .then((res) => resolve(<ITicketComment>res))
        .catch((err) => reject(err));
    });
  }
}
