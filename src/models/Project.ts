import mongoose, { Schema, model } from "mongoose";
import { IProject } from ".";

const projectSchema = new Schema<IProject>(
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
    priority: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    employees: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Employee",
      },
    ],
    todos: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Todo",
      },
    ],
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IProject>("Project", projectSchema, "projects");
