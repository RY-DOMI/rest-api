import mongoose, { Schema, model } from "mongoose";
import { IStorage } from ".";

const storageSchema = new Schema<IStorage>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    quantity: {
      type: Number,
      required: true,
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Warehouse",
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IStorage>("Storage", storageSchema, "storages");
