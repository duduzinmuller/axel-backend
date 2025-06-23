import { CreatePaymentUseCase } from "../../../use-cases/payment/create-payment";
import { CreatePaymentRepository } from "../../../repositories/payment/create-payment";
import { CreatePaymentController } from "../../../controller/payment/create-payment";
import { EmailNotificationUseCase } from "../../../use-cases/email-notification/email-notification";
import { UpdatePaymentRepository } from "../../../repositories/payment/update-payment";
import { UpdatePaymentUseCase } from "../../../use-cases/payment/update-payment";
import { UpdatePaymentController } from "../../../controller/payment/update-payment";
import { EmailNotificationRepository } from "../../../repositories/email-notification/email-notification";
import { GetPaymentStatusRepository } from "../../../repositories/payment/get-payment-status";
import { GetPaymentStatusUseCase } from "../../../use-cases/payment/get-payment-status";
import { GetPaymentStatusController } from "../../../controller/payment/get-payment-status";

export const makeCreatePaymentController = () => {
  const createPaymentRepository = new CreatePaymentRepository();

  const emailNotificationRepository = new EmailNotificationRepository();

  const emailNotificationUseCase = new EmailNotificationUseCase(
    emailNotificationRepository,
  );

  const createPaymentUseCase = new CreatePaymentUseCase(
    createPaymentRepository,
    emailNotificationUseCase,
  );

  const createPaymentController = new CreatePaymentController(
    createPaymentUseCase,
  );

  return createPaymentController;
};

export const makeUpdatePaymentController = () => {
  const updatePaymentRepository = new UpdatePaymentRepository();

  const emailNotificationRepository = new EmailNotificationRepository();

  const emailNotificationUseCase = new EmailNotificationUseCase(
    emailNotificationRepository,
  );

  const updatePaymentUseCase = new UpdatePaymentUseCase(
    updatePaymentRepository,
    emailNotificationUseCase,
  );

  const updatePaymentController = new UpdatePaymentController(
    updatePaymentUseCase,
  );

  return updatePaymentController;
};

export const makeGetPaymentStatusController = () => {
  const getPaymentStatusRepository = new GetPaymentStatusRepository();

  const getPaymentStatusUseCase = new GetPaymentStatusUseCase(
    getPaymentStatusRepository,
  );

  const getPaymentStatusController = new GetPaymentStatusController(
    getPaymentStatusUseCase,
  );

  return getPaymentStatusController;
};
