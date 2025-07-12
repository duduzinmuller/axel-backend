import { UpdatePaymentRepository } from "../../repositories/payment/update-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { Payment } from "../../types/payment";
import { EmailStatus } from "../../types/email-notification";
import { PaymentError } from "../../errors/payment";
import { renderEmailTemplate } from "../../utils/emailTemplateRenderer";
import {
  mercadopago,
  Payment as MercadoPagoPayment,
} from "../../config/mercadopago";
import prisma from "../../../prisma/prisma";

export class UpdatePaymentUseCase {
  updateParamsRepository: UpdatePaymentRepository;
  emailNotificationUseCase: EmailNotificationUseCase;

  constructor(
    updateParamsRepository: UpdatePaymentRepository,
    emailNotificationUseCase: EmailNotificationUseCase,
  ) {
    this.updateParamsRepository = updateParamsRepository;
    this.emailNotificationUseCase = emailNotificationUseCase;
  }

  async execute(updatePaymentParams: Payment) {
    if (!updatePaymentParams.externalId) {
      throw new PaymentError();
    }

    const mpPayment = new MercadoPagoPayment(mercadopago);
    const paymentIntent = await mpPayment.get({
      id: updatePaymentParams.externalId,
    });

    let updatedPayment;

    if (paymentIntent.status === "approved") {
      let planExpiresAt = null;
      const now = new Date();
      if (updatePaymentParams.plan === "MONTHLY") {
        planExpiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      } else if (updatePaymentParams.plan === "ANNUAL") {
        planExpiresAt = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
      }
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "COMPLETED",
      });

      await prisma.user.update({
        where: { id: updatedPayment.userId },
        data: { plan: updatedPayment.plan, planExpiresAt },
      });

      const htmlContent = await renderEmailTemplate("payment-completed", {
        plan: updatedPayment.plan,
        status: EmailStatus.SENT,
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Aprovado",
        content: htmlContent,
        status: EmailStatus.SENT,
      });
    }

    if (paymentIntent.status === "rejected") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "FAILED",
      });

      const htmlContent = await renderEmailTemplate("payment-failed", {
        plan: updatedPayment.plan,
        status: EmailStatus.SENT,
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Falha no Pagamento",
        content: htmlContent,
        status: EmailStatus.FAILED,
      });
    }

    if (paymentIntent.status === "cancelled") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "CANCELED",
      });

      const htmlContent = await renderEmailTemplate("payment-canceled", {
        plan: updatedPayment.plan,
        status: EmailStatus.CANCELED,
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Cancelado",
        content: htmlContent,
        status: EmailStatus.SENT,
      });
    }

    if (
      paymentIntent.status === "pending" ||
      paymentIntent.status === "in_process"
    ) {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "PENDING",
      });

      const htmlContent = await renderEmailTemplate("payment-pending", {
        plan: updatedPayment.plan,
        status: EmailStatus.PENDING,
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Pendente",
        content: htmlContent,
        status: EmailStatus.SENT,
      });
    }

    return updatedPayment;
  }
}
