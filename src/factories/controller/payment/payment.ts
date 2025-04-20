import { CreatePaymentUseCase } from "../../../use-cases/payment/create-payment";
import { StripeWebhookController } from "../../../controller/payment/stripe-webhook";
import { CreatePaymentRepository } from "../../../repositories/payment/create-payment";
import { CreatePaymentController } from "../../../controller/payment/create-payment";
import { EmailNotificationUseCase } from "../../../use-cases/email-notification/email-notification";
import { UpdatePaymentRepository } from "../../../repositories/payment/update-payment";
import { UpdatePaymentUseCase } from "../../../use-cases/payment/update-payment";
import { UpdatePaymentController } from "../../../controller/payment/update-payment";

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

export const makeUpdatePaymentController = () => {
  const updatePaymentRepository = new UpdatePaymentRepository();

  const emailNotificationUseCase = new EmailNotificationUseCase();

  const updatePaymentUseCase = new UpdatePaymentUseCase(
    updatePaymentRepository,
    emailNotificationUseCase,
  );

  const updatePaymentController = new UpdatePaymentController(
    updatePaymentUseCase,
  );

  return updatePaymentController;
};
