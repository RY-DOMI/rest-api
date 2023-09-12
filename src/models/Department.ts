import mongoose, { Schema, model } from "mongoose";
import { IDepartment } from ".";

const departmentSchema = new Schema<IDepartment>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Address",
    },
    devices: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Device",
      },
    ],
    jobs: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IDepartment>(
  "Department",
  departmentSchema,
  "departments"
);
