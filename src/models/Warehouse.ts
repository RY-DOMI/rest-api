import mongoose, { Schema, model } from "mongoose";
import { IWarehouse } from ".";

const warehouseSchema = new Schema<IWarehouse>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Address",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IWarehouse>("Warehouse", warehouseSchema, "warehouses");
