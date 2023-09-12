import mongoose, { Schema, model } from "mongoose";
import { ISupplier } from ".";

const supplierSchema = new Schema<ISupplier>(
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
    leadTime: {
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

export default model<ISupplier>("Supplier", supplierSchema, "suppliers");
