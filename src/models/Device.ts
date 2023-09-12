import mongoose, { Schema, model } from "mongoose";
import { IDevice } from ".";

const deviceSchema = new Schema<IDevice>(
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
    state: {
      type: String,
      required: true,
    },
    history: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "History",
      },
    ],
    os: {
      type: String,
      required: true,
    },
    os_version: {
      type: String,
      required: true,
    },
    cpu: {
      type: String,
      required: true,
    },
    lastIPv4: {
      type: String,
      required: true,
    },
    lastIPv6: {
      type: String,
      required: true,
    },
    last_user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
    softwares: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Software",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IDevice>("Device", deviceSchema, "devices");
