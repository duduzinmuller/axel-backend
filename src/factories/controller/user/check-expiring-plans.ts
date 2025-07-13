import { CheckExpiringPlansController } from "../../../controller/user/check-expiring-plans";
import { CheckExpiringPlansUseCase } from "../../../use-cases/user/check-expiring-plans";
import { EmailNotificationRepository } from "../../../repositories/email-notification/email-notification";
import { EmailNotificationUseCase } from "../../../use-cases/email-notification/email-notification";

export const makeCheckExpiringPlansController = () => {
  const emailNotificationRepository = new EmailNotificationRepository();
  const emailNotificationUseCase = new EmailNotificationUseCase(
    emailNotificationRepository,
  );
  const checkExpiringPlansUseCase = new CheckExpiringPlansUseCase(
    emailNotificationUseCase,
  );
  const checkExpiringPlansController = new CheckExpiringPlansController(
    checkExpiringPlansUseCase,
  );

  return checkExpiringPlansController;
};
