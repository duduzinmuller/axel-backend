import { GetEmailNotificationController } from "../../../controller/email-notification/get-email-notification";
import { GetEmailNotificationRepository } from "../../../repositories/email-notification/get-email-notification";
import { GetEmailNotificationUseCase } from "../../../use-cases/email-notification/get-email-notification";

export const makeGetEmailNotificationController = () => {
  const getEmailNotificationRepository = new GetEmailNotificationRepository();

  const getEmailNotificationUseCase = new GetEmailNotificationUseCase(
    getEmailNotificationRepository,
  );

  const getEmailNotificationController = new GetEmailNotificationController(
    getEmailNotificationUseCase,
  );

  return getEmailNotificationController;
};
