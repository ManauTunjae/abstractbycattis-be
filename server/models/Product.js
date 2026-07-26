import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
  },
  {
    _id: false,
  },
);

const dimensionsSchema = new mongoose.Schema(
  {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    unit: { type: String, default: "cm" },
  },
  {
    _id: false,
  },
);
