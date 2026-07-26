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

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [imageSchema],
    default: [],
  },
  dimensions: dimensionsSchema,
  medium: {
    type: String,
    default: "acrylic on canvas",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: [String],
    default: ["SEK"],
  },
  status: {
    type: String,
    enum: ["available", "sold", "reserved"],
    default: "available",
  },
  category: {
    type: [String],
    default: [],
  },
  yearCreated: {
    type: Number,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.index({ status: 1 });
productSchema.index({ isFeatured: 1 });

const Product = mongoose.model("Product", productSchema);
export default Product;
