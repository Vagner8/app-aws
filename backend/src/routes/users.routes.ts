import { Router } from "express";
import { userController } from "../controllers";

export const usersRoutes = Router();

usersRoutes.get("/", userController.get);
usersRoutes.post("/new", userController.post);
usersRoutes.delete("/delete", userController.delete);
