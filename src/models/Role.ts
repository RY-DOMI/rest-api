import mongoose, { Schema, model } from "mongoose";
import { IRole } from ".";

const roleSchema = new Schema<IRole>(
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
    inheritance: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Permission",
      },
    ],
    permissions: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Permission",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IRole>("Role", roleSchema, "roles");
