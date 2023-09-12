import mongoose, { Mongoose } from "mongoose";
import { env } from "../environment";
const database = env.database;

export const connect = async (): Promise<Mongoose> => {
  mongoose.set("strictQuery", false);
  return await mongoose.connect(
    `mongodb://${database.username}:${database.password}@${database.host}:${database.port}/${database.name}`
  );
};
