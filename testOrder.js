import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Order from "./models/Order.js";

dotenv.config();
await connectDB();

const testOrder = new Order({
  customer: {
    name: "Anna Andersson",
    email: "anna@example.com",
    address: {
      street: "Storgatan 1",
      city: "Stockholm",
      postalCode: "641 33",
      country: "Sweden",
    },
  },
  items: [
    {
      productId: "6a65e977a3cdba20c903b030",
      priceAtPurchase: 1500,
    },
  ],
  totalAmount: 1500,
});

await testOrder.save();
console.log("Sparad order:", testOrder);

await mongoose.disconnect();
