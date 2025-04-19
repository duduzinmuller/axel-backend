import { UpdatePaymentRepository } from "../../repositories/payment/update-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { stripe } from "../../config/stripe";
import { EmailStatus, Payment } from "../../types/user";
import { PaymentError } from "../../errors/payment";

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

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Aprovado",
        content: `Seu pagamento foi aprovado com sucesso! Você adquiriu o plano: ${updatedPayment.plan}.`,
        status: EmailStatus.SENT,
      });
    }

    if (paymentIntent.status === "requires_payment_method") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "FAILED",
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Falha no Pagamento",
        content: `O pagamento não foi aprovado. Tente novamente ou entre em contato com o suporte.`,
        status: EmailStatus.SENT,
      });
    }

    if (paymentIntent.status === "canceled") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "CANCELED",
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Cancelado",
        content: `Seu pagamento foi cancelado. Caso precise de mais informações, entre em contato.`,
        status: EmailStatus.SENT,
      });
    }

    if (paymentIntent.status === "requires_confirmation") {
      updatedPayment = await this.updateParamsRepository.execute({
        ...updatePaymentParams,
        status: "PENDING",
      });

      await this.emailNotificationUseCase.execute({
        id: updatedPayment.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        plan: updatedPayment.plan,
        recipient: updatedPayment.recipient || "default@example.com",
        subject: "Pagamento Pendente",
        content: `Seu pagamento está pendente. Por favor, aguarde a confirmação.`,
        status: EmailStatus.SENT,
      });
    }

    return updatedPayment;
  }
}
