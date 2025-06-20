import { Router, Request, Response } from "express";
import {
  makeCreateAccessController,
  makeValidateAccessCodeController,
} from "../../factories/controller/access-code/access-code";
import { auth } from "../../middleware/auth";
import { HttpResponse } from "../../types/httpRequest";

export const accessCodeRouter = Router();

accessCodeRouter.post("/access-code", async (req: Request, res: Response) => {
  const createAccessController = makeCreateAccessController();

  const { statusCode, body }: HttpResponse =
    await createAccessController.execute(req);

  res.status(statusCode).json(body);
});

accessCodeRouter.post(
  "/validate-access-code",
  auth,
  async (req: Request, res: Response) => {
    const validateAccessCodeController = makeValidateAccessCodeController();

    const userId = req.userId;

    const { statusCode, body }: HttpResponse =
      await validateAccessCodeController.execute({
        params: { userId },
        body: req.body,
      });

    res.status(statusCode).json(body);
  },
);
