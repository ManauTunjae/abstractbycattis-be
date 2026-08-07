import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    priceAtPurchase: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false },
);

const orderCustomerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // Allow null for guest users
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String },
    },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: orderCustomerSchema,
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "Order must have at least one painting.",
      },
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    shippingMethod: {
      type: String,
    },
  },
  { timestamp: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
