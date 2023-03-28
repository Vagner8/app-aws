import { UserModel } from "../models/user.model";
import { v4 as uuidv4 } from "uuid";
import type { ControllerType } from "./types";

export const userController: ControllerType = {
  async get(req, res) {
    const users = await UserModel.find();
    res.send(users);
  },

  async post(req, res) {
    const newUser = new UserModel({ ...req.body, userId: uuidv4() });
    const user = await newUser.save();
    res.send(user);
  },

  async delete(req, res) {
    const response = await UserModel.findOneAndDelete(req.body);
    res.send(response);
  },
};
