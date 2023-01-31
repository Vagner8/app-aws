import type { ControllerType } from "./types";

let count = 1

export const testController: ControllerType = {
  get(req, res, next) {
    res.json({ count: ++count });
  },
};
