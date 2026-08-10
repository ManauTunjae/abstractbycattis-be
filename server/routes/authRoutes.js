import express from "express";
import { registerUser, loginUser } from "../controllers/authController";
import {
  registerValidator,
  loginValidator,
  handleValidationErrors,
} from "../middleware/validators";

const router = express.Router();

router.post("/register", registerValidator, handleValidationErrors, registerUser);
router.post("/login", loginValidator, handleValidationErrors, loginUser);

export default router;