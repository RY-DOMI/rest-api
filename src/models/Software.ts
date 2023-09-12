import mongoose, { Schema, model } from "mongoose";
import { ISoftware } from ".";

const softwareSchema = new Schema<ISoftware>(
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
    url: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    license: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "License",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ISoftware>("Software", softwareSchema, "softwares");
