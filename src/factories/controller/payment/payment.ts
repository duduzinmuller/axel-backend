import { CreatePaymentUseCase } from "../../../use-cases/payment/create-payment";
import { StripeWebhookController } from "../../../controller/payment/stripe-webhook";
import { CreatePaymentRepository } from "../../../repositories/payment/create-payment";
import { CreatePaymentController } from "../../../controller/payment/create-payment";
import { EmailNotificationUseCase } from "../../../use-cases/email-notification/email-notification";

export const makeCreatePaymentController = () => {
  const createPaymentRepository = new CreatePaymentRepository();

  const emailNotificationUseCase = new EmailNotificationUseCase();

  const createPaymentUseCase = new CreatePaymentUseCase(
    createPaymentRepository,
    emailNotificationUseCase,
  );

  const createPaymentController = new CreatePaymentController(
    createPaymentUseCase,
  );

  return createPaymentController;
};

export const makeStripeWebhookController = () => {
  const createPaymentRepository = new CreatePaymentRepository();

  const emailNotificationUseCase = new EmailNotificationUseCase();

  const createPaymentUseCase = new CreatePaymentUseCase(
    createPaymentRepository,
    emailNotificationUseCase,
  );

  const stripeWebhookController = new StripeWebhookController(
    createPaymentUseCase,
  );

  return stripeWebhookController;
};
