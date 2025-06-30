import { Request, Response, Router } from "express";
import { makeGetEmailNotificationController } from "../../factories/controller/email-notification/email-notification";
import { HttpResponse } from "../../types/httpRequest";

export const emailNotificationRouter = Router();

emailNotificationRouter.get("/", async (req: Request, res: Response) => {
  const getEmailNotificationController = makeGetEmailNotificationController();

  const { statusCode, body }: HttpResponse =
    await getEmailNotificationController.execute(req);

  res.status(statusCode).send(body);
});
