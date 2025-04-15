import { Request, Response, Router } from "express";
import { CreateUserController } from "../../controller/user/create-user";
import {
  makeCreateUserController,
  makeGetUserByIdController,
} from "../../factories/controller/user";

export const userRouter = Router();

userRouter.post("/", async (request: Request, response: Response) => {
  const controller = makeCreateUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.get("/:userId", async (request: Request, response: Response) => {
  const controller = makeGetUserByIdController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});
