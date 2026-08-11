import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  registerValidator,
  loginValidator,
  handleValidationErrors,
} from "../validators/authValidator.js";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  handleValidationErrors,
  registerUser,
);
router.post("/login", loginValidator, handleValidationErrors, loginUser);
router.get("/profile", verifyToken, (req, res) => {
  res.json({ user: req.user });
});
//Test admin route
router.get("/admin-test", verifyToken, requireAdmin, (req, res) => {
  res.json({ message: "Admin access granted." });
});

export default router;
