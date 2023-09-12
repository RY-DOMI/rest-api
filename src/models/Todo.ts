import mongoose, { Schema, model } from "mongoose";
import { ITodo } from ".";

const todoSchema = new Schema<ITodo>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    text: {
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
    tags: {
      type: [String],
      required: true,
    },
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

export default model<ITodo>("Todo", todoSchema, "todos");
