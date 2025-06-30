import { Request, Response, Router } from "express";
import {
  makeGetEmailVerificationController,
  makeValidateVerificationCodeController,
  makeVerificationController,
} from "../../factories/controller/email-verification/email-verification";
import { HttpResponse } from "../../types/httpRequest";

export const createVerificationRouter = Router();

createVerificationRouter.post(
  "/verification-code",
  async (request: Request, response: Response) => {
    const controller = makeVerificationController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

createVerificationRouter.post(
  "/validate-code",
  async (request: Request, response: Response) => {
    const controller = makeValidateVerificationCodeController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

createVerificationRouter.get(
  "/",
  async (request: Request, response: Response) => {
    const controller = makeGetEmailVerificationController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);
