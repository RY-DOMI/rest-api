import mongoose, { Schema, model } from "mongoose";
import { IPermission } from ".";

const permissionSchema = new Schema<IPermission>(
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IPermission>(
  "Permission",
  permissionSchema,
  "permissions"
);
