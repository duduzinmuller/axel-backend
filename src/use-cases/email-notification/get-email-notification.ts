import { GetEmailNotificationRepository } from "../../repositories/email-notification/get-email-notification";
import { EmailNotification } from "../../types/email-notification";

export class GetEmailNotificationUseCase {
  constructor(
    private getEmailNotificationRepository: GetEmailNotificationRepository,
  ) {
    this.getEmailNotificationRepository = getEmailNotificationRepository;
  }
  async execute(emailNotificationParams: EmailNotification) {
    const emailNotification = await this.getEmailNotificationRepository.execute(
      emailNotificationParams,
    );

    return emailNotification;
  }
}
