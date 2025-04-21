import { Router, Request, Response } from "express";
import { makeGoogleGenerateController } from "../../factories/controller/google-generate/google-generate";
import { auth } from "../../middleware/auth";

export const googleGenerateRouter = Router();

googleGenerateRouter.post(
  "/generate",
  auth,
  async (request: Request, response: Response) => {
    const controller = makeGoogleGenerateController();
    const { statusCode, body }: any = await controller.execute(request);
    response.status(statusCode).json(body);
  },
);
