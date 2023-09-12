import mongoose, { Schema, model } from "mongoose";
import { ITicketComment } from ".";

const ticketCommentSchema = new Schema<ITicketComment>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    content: {
      type: String,
      required: true,
    },
    ticket: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
    employee: {
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

export default model<ITicketComment>(
  "TicketComment",
  ticketCommentSchema,
  "ticketComments"
);
