import { Router, Request, Response } from "express";
import { makeCreateAccessController } from "../../factories/controller/access-code/access-code";

export const accessCodeRouter = Router();

accessCodeRouter.post("/access-code", async (req: Request, res: Response) => {
  const createAccessController = makeCreateAccessController();

  const { statusCode, body } = await createAccessController.execute(req);

  res.status(statusCode).json(body);
});
