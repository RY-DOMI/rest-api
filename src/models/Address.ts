import mongoose, { Schema, model } from "mongoose";
import { IAddress } from ".";

const addressSchema = new Schema<IAddress>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    street: {
      type: String,
      required: true,
    },
    postal_code: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state_province: {
      type: String,
      required: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Country",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IAddress>("Address", addressSchema, "addresses");
