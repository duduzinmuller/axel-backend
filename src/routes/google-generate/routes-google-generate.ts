import { Router, Request, Response } from "express";
import { makeGoogleGenerateController } from "../../factories/controller/google-generate/google-generate";
import { HttpResponse } from "../../types/httpRequest";

export const googleGenerateRouter = Router();

googleGenerateRouter.post(
  "/generate",
  async (request: Request, response: Response) => {
    const controller = makeGoogleGenerateController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).json(body);
  },
);
