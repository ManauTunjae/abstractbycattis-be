import express from "express";
import {
  registerValidator,
  loginValidator,
  handleValidationErrors,
} from "./validators/authValidator.js";

const app = express();
app.use(express.json());

app.post(
  "/test-register",
  registerValidator,
  handleValidationErrors,
  (req, res) => {
    res.json({ message: "Registration data is valid.", data: req.body });
  },
);

app.listen(4000, () => console.log("Test-server is running on port 4000"));
