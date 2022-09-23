import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  pwd: String,
  personal: String,
  phone: String,
  prefer: String,
  og: {
    title: String,
    description: String,
    image: String,
  },
});

export const User = mongoose.model("User", UserSchema);
