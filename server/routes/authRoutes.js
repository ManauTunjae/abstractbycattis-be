import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
  handleValidationErrors,
} from "../validators/authValidator.js";

const router = express.Router();

router.post("/register", registerValidator, handleValidationErrors, registerUser);
router.post("/login", loginValidator, handleValidationErrors, loginUser);

export default router;