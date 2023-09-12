import { FilterQuery, UpdateQuery } from "mongoose";
import { IModel } from "../models";

export default abstract class Serivce<T extends IModel> {
  abstract create(data: T): Promise<T>;
  abstract getAll(filter: FilterQuery<T>): Promise<T[]>;
  abstract get(filter: FilterQuery<T>): Promise<T>;
  abstract update(filter: FilterQuery<T>, data: T): Promise<T>;
  abstract delete(filter: FilterQuery<T>): Promise<T>;
}
