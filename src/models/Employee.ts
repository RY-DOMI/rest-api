import mongoose, { Schema, model } from "mongoose";
import { IEmployee } from ".";

const employeeSchema = new Schema<IEmployee>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    blocked: {
      type: Boolean,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    title: String,
    notes: {
      type: [String],
    },
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],
    role: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Role",
    },
    department: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Department",
    },
    salary: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Salary",
    },
    job: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Job",
    },
    address: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Address",
    },
    vacationDays: {
      type: Number,
      required: true,
    },
    sickDays: {
      type: Number,
      required: true,
    },
    loggedIn: {
      type: Date,
      required: true,
    },
    loggedOut: {
      type: Date,
      required: true,
    },
    emergencyContacts: [
      {
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phone: { type: String, required: true },
      },
    ],
    documents: [
      {
        name: { type: String, required: true },
        file: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IEmployee>("Employee", employeeSchema, "employees");
