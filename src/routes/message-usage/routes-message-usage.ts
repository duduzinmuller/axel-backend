import { Router, Request, Response } from "express";
import { makeGetMessageUsageController } from "../../factories/controller/message-usage/message-usage";
import { HttpResponse } from "../../types/httpRequest";

export const messageUsageRouter = Router();

messageUsageRouter.get("/", async (req: Request, res: Response) => {
  const controller = makeGetMessageUsageController();
  const { statusCode, body }: HttpResponse = await controller.execute(req);
  res.status(statusCode).send(body);
});
