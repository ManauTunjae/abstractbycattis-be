import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const addressSchema = new mongoose.Schema(
  {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordhash: {
    type: String,
    required: true,
  },
  address: addressSchema,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
