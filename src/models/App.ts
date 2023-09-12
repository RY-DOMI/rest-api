import mongoose, { Schema, model } from "mongoose";
import { IApp } from ".";

const appSchema = new Schema<IApp>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    },
    lastIPv4: {
      type: String,
      required: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IApp>("App", appSchema, "apps");
