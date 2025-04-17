import prisma from "../../../prisma/prisma";
import { EmailNotification, EmailStatus } from "../../types/user";

export class EmailNotificationRepository {
  async execute(createEmailNotificationParams: EmailNotification) {
    const emailNotification = await prisma.emailNotification.create({
      data: {
        ...createEmailNotificationParams,
        status: EmailStatus.PENDING,
      },
    });

    return emailNotification;
  }
}
