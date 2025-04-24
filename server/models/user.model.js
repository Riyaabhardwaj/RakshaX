import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"

const address = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter Your Mobile Number"],
    unique: true,
    validate: [validator.isMobilePhone, "Please Enter a valid Mobile Number"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  addresses: [address],
  resetPasswordToken: String,
  resetPasswordExpire: Date,
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// verify password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}


// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + (15 * 60 * 1000);

  return resetToken;
};

export const User = mongoose.model("User", userSchema);
