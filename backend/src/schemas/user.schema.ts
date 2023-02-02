import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  email: String
})