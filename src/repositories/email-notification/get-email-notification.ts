import prisma from "../../../prisma/prisma";
import { EmailNotification, EmailStatus } from "../../types/email-notification";

export class GetEmailNotificationRepository {
  async execute(emailNotificationParams: EmailNotification) {
    const emailNotification = await prisma.emailNotification.findMany({
      where: {
        ...emailNotificationParams,
        status: EmailStatus.PENDING,
      },
    });

    return emailNotification;
  }
}
