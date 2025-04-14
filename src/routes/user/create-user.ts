import { Request, Response, Router } from "express";
import { CreateUserController } from "../../controller/user/create-user";
import { makeCreateUserController } from "../../factories/controller/user";

export const userRouter = Router();

userRouter.post("/", async (request: Request, response: Response) => {
  const controller = makeCreateUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});
