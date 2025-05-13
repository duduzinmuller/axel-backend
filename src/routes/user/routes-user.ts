import { Request, Response, Router } from "express";
import {
  makeCreateUserController,
  makeDeleteUserController,
  makeGetOrCreateUserByProviderController,
  makeGetUserByIdController,
  makeLoginUserController,
  makeRefreshTokenController,
  makeRequestResetPasswordController,
  makeResetPasswordController,
  makeUpdateUserController,
} from "../../factories/controller/user/user";
import { auth } from "../../middleware/auth";

export const userRouter = Router();

userRouter.post("/register", async (request: Request, response: Response) => {
  const controller = makeCreateUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.get("/me", auth, async (request: Request, response: Response) => {
  const controller = makeGetUserByIdController();

  const userId = request.userId;

  const { statusCode, body }: any = await controller.execute({
    params: { userId },
  });

  response.status(statusCode).send(body);
});

userRouter.patch("/me", auth, async (request: Request, response: Response) => {
  const controller = makeUpdateUserController();

  const userId = request.userId;

  const { statusCode, body }: any = await controller.execute({
    params: { userId },
    body: request.body,
  });

  response.status(statusCode).send(body);
});

userRouter.delete("/me", auth, async (request: Request, response: Response) => {
  const controller = makeDeleteUserController();

  const userId = request.userId;

  const { statusCode, body }: any = await controller.execute({
    params: { userId },
  });

  response.status(statusCode).send(body);
});

userRouter.post("/login", async (request: Request, response: Response) => {
  const controller = makeLoginUserController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post(
  "/refresh-token",
  async (request: Request, response: Response) => {
    const controller = makeRefreshTokenController();

    const { statusCode, body }: any = await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

userRouter.post("/provider", async (request: Request, response: Response) => {
  const controller = makeGetOrCreateUserByProviderController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post(
  "/reset-password",
  async (request: Request, response: Response) => {
    const controller = makeResetPasswordController();

    const { statusCode, body }: any = await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

userRouter.post("/request-reset-password", async (request, response) => {
  const controller = makeRequestResetPasswordController();

  const { statusCode, body }: any = await controller.execute(request);

  response.status(statusCode).send(body);
});
