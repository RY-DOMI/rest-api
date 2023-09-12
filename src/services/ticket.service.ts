import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ITicket } from "../models";
import Ticket from "../models/Ticket";

export default class TicketService extends Service<ITicket> {
  constructor() {
    super();
  }

  async create(data: ITicket): Promise<ITicket> {
    return new Promise(async (resolve, reject) => {
      await Ticket.create(data)
        .then((res) => resolve(<ITicket>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ITicket[]> {
    return new Promise(async (resolve, reject) => {
      await Ticket.find(filter)
        .then((res) => resolve(<ITicket[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ITicket> {
    return new Promise(async (resolve, reject) => {
      await Ticket.findOne(filter)
        .then((res) => resolve(<ITicket>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ITicket): Promise<ITicket> {
    return new Promise(async (resolve, reject) => {
      await Ticket.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ITicket>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ITicket> {
    return new Promise(async (resolve, reject) => {
      await Ticket.findOneAndDelete(filter)
        .then((res) => resolve(<ITicket>res))
        .catch((err) => reject(err));
    });
  }
}
