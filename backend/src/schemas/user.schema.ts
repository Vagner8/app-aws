import { Schema } from "mongoose";

export const userSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});
