import mongoose, { Schema, model } from "mongoose";
import { IProduct } from ".";

const productSchema = new Schema<IProduct>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    barcode: {
      type: String,
      required: true,
    },
    unitOfMeasurement: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    reorderThreshold: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IProduct>("Product", productSchema, "products");
