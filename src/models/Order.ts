import mongoose, { Schema, model } from "mongoose";
import { IOrder } from ".";

const orderSchema = new Schema<IOrder>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    quantity: {
      type: Number,
      required: true,
    },
    orderedAt: {
      type: Date,
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

export default model<IOrder>("Order", orderSchema, "orders");
