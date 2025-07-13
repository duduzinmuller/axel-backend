import { Request, Response, Router } from "express";
import {
  makeCreateUserController,
  makeDeleteUserController,
  makeGetByUserController,
  makeGetByUserStatusController,
  makeGetUserByIdController,
  makeGetUserPlanController,
  makeLoginUserController,
  makeRefreshTokenController,
  makeRequestResetPasswordController,
  makeResetPasswordController,
  makeUpdateUserController,
} from "../../factories/controller/user/user";
import { makeCheckExpiringPlansController } from "../../factories/controller/user/check-expiring-plans";
import { auth } from "../../middleware/auth";
import { HttpResponse } from "../../types/httpRequest";

export const userRouter = Router();

userRouter.get("/me", auth, async (request: Request, response: Response) => {
  const controller = makeGetUserByIdController();

  const userId = request.userId;

  const { statusCode, body }: HttpResponse = await controller.execute({
    params: { userId },
  });

  response.status(statusCode).send(body);
});

userRouter.get("/", async (request: Request, response: Response) => {
  const controller = makeGetByUserController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.get("/plans", async (request: Request, response: Response) => {
  const controller = makeGetUserPlanController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.get("/status", async (request: Request, response: Response) => {
  const controller = makeGetByUserStatusController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post("/register", async (request: Request, response: Response) => {
  const controller = makeCreateUserController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.patch("/me", auth, async (request: Request, response: Response) => {
  const controller = makeUpdateUserController();

  const userId = request.userId;

  const { statusCode, body }: HttpResponse = await controller.execute({
    params: { userId },
    body: request.body,
  });

  response.status(statusCode).send(body);
});

userRouter.delete("/me", auth, async (request: Request, response: Response) => {
  const controller = makeDeleteUserController();

  const userId = request.userId;

  const { statusCode, body }: HttpResponse = await controller.execute({
    params: { userId },
  });

  response.status(statusCode).send(body);
});

userRouter.post("/login", async (request: Request, response: Response) => {
  const controller = makeLoginUserController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post(
  "/refresh-token",
  async (request: Request, response: Response) => {
    const controller = makeRefreshTokenController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

userRouter.post(
  "/reset-password",
  async (request: Request, response: Response) => {
    const controller = makeResetPasswordController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

userRouter.post("/request-reset-password", async (request, response) => {
  const controller = makeRequestResetPasswordController();

  const { statusCode, body }: HttpResponse = await controller.execute(request);

  response.status(statusCode).send(body);
});

userRouter.post(
  "/check-expiring-plans",
  auth,
  async (request: Request, response: Response) => {
    const controller = makeCheckExpiringPlansController();

    const { statusCode, body }: HttpResponse =
      await controller.execute(request);

    response.status(statusCode).send(body);
  },
);
