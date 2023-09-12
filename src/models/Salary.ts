import mongoose, { Schema, model } from "mongoose";
import { ISalary } from ".";

const SalarySchema = new Schema<ISalary>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    amount: {
      type: Number,
      required: true,
    },
    comments: {
      type: [String],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ISalary>("Salary", SalarySchema, "salaries");
