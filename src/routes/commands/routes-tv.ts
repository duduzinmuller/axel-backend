import { Router, Request, Response } from "express";
import { makeTvController } from "../../factories/controller/scripts/script";
import { auth } from "../../middleware/auth";

export const tvRouter = Router();

tvRouter.post("/turn-on", auth, async (req: Request, res: Response) => {
  const tvController = makeTvController();
  const { statusCode, body } = await tvController.turnOn(req);
  res.status(statusCode).json(body);
});

tvRouter.post("/turn-off", auth, async (req: Request, res: Response) => {
  const tvController = makeTvController();
  const { statusCode, body } = await tvController.turnOff(req);
  res.status(statusCode).json(body);
});
