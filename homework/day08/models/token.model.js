import mongoose from "mongoose";

const PhoneSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: Boolean,
});

export const Phone = mongoose.model("Phone", PhoneSchema);
