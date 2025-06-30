import { Router, Request, Response } from "express";
import {
  makeCreatePaymentController,
  makeGetPaymentHistoryController,
  makeGetPaymentStatusController,
  makeGetPaymentStatusPercentageController,
  makeUpdatePaymentController,
} from "../../factories/controller/payment/payment";
import { auth } from "../../middleware/auth";
import { MercadoPagoWebhookController } from "../../controller/payment/mercadopago-webhook";
import { HttpResponse } from "../../types/httpRequest";

export const paymentRouter = Router();

paymentRouter.post(
  "/create-payment",
  auth,
  async (request: Request, response: Response) => {
    const createPaymentController = makeCreatePaymentController();
    const { statusCode, body }: HttpResponse =
      await createPaymentController.execute(request);
    response.status(statusCode).json(body);
  },
);

paymentRouter.post("/webhook", async (request: Request, response: Response) => {
  const mercadoPagoWebhookController = new MercadoPagoWebhookController();
  const { statusCode, body }: HttpResponse =
    await mercadoPagoWebhookController.handleWebhook(request);
  response.status(statusCode).json(body);
});

paymentRouter.patch(
  "/update-payment",
  auth,
  async (request: Request, response: Response) => {
    const updatePaymentController = makeUpdatePaymentController();
    const { statusCode, body }: HttpResponse =
      await updatePaymentController.execute(request);
    response.status(statusCode).json(body);
  },
);

paymentRouter.get(
  "/status/:paymentId",
  auth,
  async (request: Request, response: Response) => {
    const controller = makeGetPaymentStatusController();
    const { statusCode, body }: HttpResponse = await controller.execute({
      params: request.params,
    });
    response.status(statusCode).json(body);
  },
);

paymentRouter.get(
  "/status-percentage",
  async (request: Request, response: Response) => {
    const controller = makeGetPaymentStatusPercentageController();
    const { statusCode, body }: HttpResponse =
      await controller.execute(request);
    response.status(statusCode).json(body);
  },
);

paymentRouter.get("/history", async (request: Request, response: Response) => {
  const controller = makeGetPaymentHistoryController();
  const { statusCode, body }: HttpResponse = await controller.execute(request);
  response.status(statusCode).json(body);
});
