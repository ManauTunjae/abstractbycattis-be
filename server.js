import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./server/config/db.js";
import authRoutes from "./server/routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
