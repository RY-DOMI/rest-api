import mongoose, { Schema, model } from "mongoose";
import { ITicket } from ".";

const ticketSchema = new Schema<ITicket>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    title: {
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
    priority: {
      type: String,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    assigned_to: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
    created_by: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ITicket>("Ticket", ticketSchema, "tickets");
