import { Router, Request, Response } from "express";
import {
  makeCreatePaymentController,
  makeStripeWebhookController,
} from "../../factories/controller/payment/payment";
import { auth } from "../../middleware/auth";

export const paymentRouter = Router();

paymentRouter.post(
  "/create-payment",
  auth,
  async (request: Request, response: Response) => {
    const createPaymentController = makeCreatePaymentController();

    const { statusCode, body } = await createPaymentController.execute(request);

    response.status(statusCode).json(body);
  },
);

paymentRouter.post("/webhook", async (request: Request, response: Response) => {
  const stripeWebhookController = makeStripeWebhookController();

  const { statusCode, body } =
    await stripeWebhookController.handleWebhook(request);

  response.status(statusCode).json(body);
});
