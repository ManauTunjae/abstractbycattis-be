import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already existing." });
    }
    const User = await User.create({
      name,
      email,
      passwordHash: password,
    });
    const token = generateToken(User._id, User.role);
    res.status(201).json({
      _id: User._id,
      name: User.name,
      email: User.email,
      role: User.role,
      token,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Epost already existing." });
    }
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
