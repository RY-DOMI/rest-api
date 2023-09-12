import mongoose, { Schema, model } from "mongoose";
import { ITicketCategory } from ".";

const ticketCategorySchema = new Schema<ITicketCategory>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ITicketCategory>(
  "TicketCategory",
  ticketCategorySchema,
  "ticketCategories"
);
