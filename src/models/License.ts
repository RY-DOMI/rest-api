import mongoose, { Schema, model } from "mongoose";
import { ILicense } from ".";

const licenseSchema = new Schema<ILicense>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ILicense>("License", licenseSchema, "licenses");
