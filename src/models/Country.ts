import mongoose, { Schema, SchemaType, model } from "mongoose";
import { ICountry } from ".";

const countrySchema = new Schema<ICountry>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ICountry>("Country", countrySchema, "countries");
