import mongoose, { Schema, model } from "mongoose";
import { IDelivery } from ".";

const deliverySchema = new Schema<IDelivery>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    deliveredAt: {
      type: Date,
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Supplier",
    },
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    warehouse: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Warehouse",
    },
    order: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IDelivery>("Delivery", deliverySchema, "deliveries");
