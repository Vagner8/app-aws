import { model } from "mongoose";
import { userSchema } from "../schemas/user.schema";

export const UserModel = model("User", userSchema);
