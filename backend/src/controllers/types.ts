import { NextFunction, Request, Response } from "express";

type ControllerFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface ControllerType {
  get: ControllerFunctionType;
  post: ControllerFunctionType;
  delete: ControllerFunctionType;
}
