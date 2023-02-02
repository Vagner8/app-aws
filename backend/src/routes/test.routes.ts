import { Router } from "express";
import { testController } from "../controllers";

export const route = Router();

route.post("/", testController.get);
