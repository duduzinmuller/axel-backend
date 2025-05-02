import { Router, Request, Response } from "express";
import { makeFacebookController } from "../../factories/controller/social/social";

export const socialRouter = Router();

socialRouter.post("/schedule/facebook", async (req: Request, res: Response) => {
  const facebookController = makeFacebookController();
  const { statusCode, body } = await facebookController.schedulePost(req);
  res.status(statusCode).json(body);
});
