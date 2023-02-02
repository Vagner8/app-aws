import { UserModel } from "../models/user.model";
import type { ControllerType } from "./types";

let count = 1;

export const testController: ControllerType = {
  async get(req, res, next) {
    const user = new UserModel(req.body);
    const result = await user.save();
    console.log(result);
    res.json({ message: "new user is created" });
  },
};
