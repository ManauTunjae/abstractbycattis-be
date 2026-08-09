import { body, validationResult } from "express/validator";

export const registerValidator = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("email").isEmail().normalizeEmail().withMessage("Email is required."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
];

export const loginValidator = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Type a valid email address."),
  body("password").notEmpty().withMessage("Password is required."),
];
