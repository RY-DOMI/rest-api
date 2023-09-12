import mongoose, { Schema, model } from "mongoose";
import { IJob } from ".";

const jobSchema = new Schema<IJob>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    min_salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IJob>("Job", jobSchema, "jobs");
