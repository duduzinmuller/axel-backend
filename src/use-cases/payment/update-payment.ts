import { UpdatePaymentRepository } from "../../repositories/payment/update-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { stripe } from "../../config/stripe";
import { EmailStatus, Payment } from "../../types/user";
import { PaymentError } from "../../errors/payment";
import { renderEmailTemplate } from "../../utils/emailTemplateRenderer";

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

    const paymentIntent = await stripe.paymentIntents.retrieve(
      updatePaymentParams.externalId,
    );

    let updatedPayment;

    if (paymentIntent.status === "succeeded") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "COMPLETED",
      });

      const htmlContent = await renderEmailTemplate("payment-success", {
        plan: updatedPayment.plan,
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

    if (paymentIntent.status === "requires_payment_method") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "FAILED",
      });

      const htmlContent = await renderEmailTemplate("payment-failed", {
        plan: updatedPayment.plan,
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Falha no Pagamento",
        content: htmlContent,
        status: EmailStatus.SENT,
      });
    }

    if (paymentIntent.status === "canceled") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "CANCELED",
      });

      const htmlContent = await renderEmailTemplate("payment-canceled", {
        plan: updatedPayment.plan,
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

    if (paymentIntent.status === "requires_confirmation") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "PENDING",
      });

      const htmlContent = await renderEmailTemplate("payment-pending", {
        plan: updatedPayment.plan,
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
