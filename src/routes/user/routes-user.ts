import { Request, Response, Router } from "express";
import {
  makeCreateUserController,
  makeDeleteUserController,
  makeGetUserByIdController,
  makeLoginUserController,
  makeUpdateUserController,
} from "../../factories/controller/user";
import { auth } from "../../middleware/auth";

export const userRouter = Router();

userRouter.post("/", async (request: Request, response: Response) => {
  const controller = makeCreateUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.get("/me", auth, async (request: Request, response: Response) => {
  const controller = makeGetUserByIdController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.patch("/me", auth, async (request: Request, response: Response) => {
  const controller = makeUpdateUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.delete("/me", auth, async (request: Request, response: Response) => {
  const controller = makeDeleteUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post("/login", async (request: Request, response: Response) => {
  const controller = makeLoginUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});
