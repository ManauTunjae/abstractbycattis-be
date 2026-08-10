import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const addressSchema = new mongoose.Schema(
  {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    address: addressSchema,
  },
  { timestamps: true },
);

// Hash the password before saving the user document
userSchema.pre("save", async function () {
  if (!this.isModified("passwordHash")) return;

  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

const User = mongoose.model("User", userSchema);
export default User;
