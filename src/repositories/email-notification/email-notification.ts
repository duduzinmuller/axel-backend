import prisma from "../../../prisma/prisma";
import { EmailNotification, EmailStatus } from "../../types/user";

export class EmailNotificationRepository {
  async execute(createEmailNotificationParams: EmailNotification) {
    const emailNotification = await prisma.emailNotification.create({
      data: {
        recipient: createEmailNotificationParams.recipient,
        subject: createEmailNotificationParams.subject,
        content: createEmailNotificationParams.content,
        status: EmailStatus.PENDING,
        plan: createEmailNotificationParams.plan,
      },
    });

    return emailNotification;
  }
}
