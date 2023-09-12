import { FilterQuery, UpdateQuery } from "mongoose";
import Service from ".";
import { ITodo } from "../models";
import Todo from "../models/Todo";

export default class TodoService extends Service<ITodo> {
  constructor() {
    super();
  }

  async create(data: ITodo): Promise<ITodo> {
    return new Promise(async (resolve, reject) => {
      await Todo.create(data)
        .then((res) => resolve(<ITodo>res))
        .catch((err) => reject(err));
    });
  }
  async getAll(filter: FilterQuery<any>): Promise<ITodo[]> {
    return new Promise(async (resolve, reject) => {
      await Todo.find(filter)
        .then((res) => resolve(<ITodo[]>res))
        .catch((err) => reject(err));
    });
  }
  async get(filter: FilterQuery<any>): Promise<ITodo> {
    return new Promise(async (resolve, reject) => {
      await Todo.findOne(filter)
        .then((res) => resolve(<ITodo>res))
        .catch((err) => reject(err));
    });
  }
  async update(filter: FilterQuery<any>, data: ITodo): Promise<ITodo> {
    return new Promise(async (resolve, reject) => {
      await Todo.findOneAndUpdate(filter, data, {
        upsert: true,
        setDefaultsOnInsert: false,
        new: true,
      })
        .then((res) => resolve(<ITodo>res))
        .catch((err) => reject(err));
    });
  }
  async delete(filter: FilterQuery<any>): Promise<ITodo> {
    return new Promise(async (resolve, reject) => {
      await Todo.findOneAndDelete(filter)
        .then((res) => resolve(<ITodo>res))
        .catch((err) => reject(err));
    });
  }
}
