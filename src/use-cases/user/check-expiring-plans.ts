import prisma from "../../../prisma/prisma";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { EmailStatus } from "../../types/email-notification";
import { renderEmailTemplate } from "../../utils/emailTemplateRenderer";

export class CheckExpiringPlansUseCase {
  constructor(private emailNotificationUseCase: EmailNotificationUseCase) {
    this.emailNotificationUseCase = emailNotificationUseCase;
  }

  async execute() {
    const now = new Date();
    const twoDaysFromNow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);

    const expiringUsers = await prisma.user.findMany({
      where: {
        planExpiresAt: {
          gte: now,
          lte: twoDaysFromNow,
        },
        plan: {
          in: ["MONTHLY", "ANNUAL"],
        },
        isVerified: true,
      },
    });

    for (const user of expiringUsers) {
      try {
        const daysUntilExpiration = Math.ceil(
          (user.planExpiresAt!.getTime() - now.getTime()) /
            (24 * 60 * 60 * 1000),
        );

        const htmlContent = await renderEmailTemplate("plan-expiring", {
          userName: user.name,
          plan: user.plan,
          daysUntilExpiration,
          expirationDate: user.planExpiresAt!.toLocaleDateString("pt-BR"),
        });

        await this.emailNotificationUseCase.execute({
          id: `expiring-${user.id}-${Date.now()}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          plan: user.plan,
          recipient: user.email,
          subject: `Seu plano ${user.plan} expira em ${daysUntilExpiration} dias`,
          content: htmlContent,
          status: EmailStatus.PENDING,
        });
      } catch (error) {
        console.error(`❌ Erro ao enviar email para ${user.email}:`, error);
      }
    }

    return {
      totalUsers: expiringUsers.length,
      processedUsers: expiringUsers.length,
    };
  }
}
