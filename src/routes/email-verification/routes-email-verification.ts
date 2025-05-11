import { Request, Response, Router } from "express";
import {
  makeValidateVerificationCodeController,
  makeVerificationController,
} from "../../factories/controller/email-verification/email-verification";

export const createVerificationRouter = Router();

createVerificationRouter.post(
  "/verification-code",
  async (request: Request, response: Response) => {
    const controller = makeVerificationController();

    const { statusCode, body }: any = await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

createVerificationRouter.post(
  "/validate-code",
  async (request: Request, response: Response) => {
    const controller = makeValidateVerificationCodeController();

    const { statusCode, body }: any = await controller.execute(request);

    response.status(statusCode).send(body);
  },
);
