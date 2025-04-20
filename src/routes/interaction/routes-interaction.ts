import { Router, Request, Response } from "express";
import { makeCreateInteractionController } from "../../factories/controller/interaction/interaction";

export const interactionRouter = Router();

interactionRouter.post(
  "/interaction",
  async (request: Request, response: Response) => {
    const createInteractionController = makeCreateInteractionController();

    const { statusCode, body } =
      await createInteractionController.execute(request);

    response.status(statusCode).send(body);
  },
);
