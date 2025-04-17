import { CreatePaymentRepository } from "../../repositories/payment/create-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { stripe } from "../../config/stripe";
import { EmailStatus, Payment } from "../../types/user";

export class CreatePaymentUseCase {
  createPaymentRepository: CreatePaymentRepository;
  emailNotificationUseCase: EmailNotificationUseCase;

  constructor() {
    this.createPaymentRepository = new CreatePaymentRepository();
    this.emailNotificationUseCase = new EmailNotificationUseCase();
  }

  async execute(createPaymentParams: Payment) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: createPaymentParams.amount,
      currency: "brl",
      payment_method_types: ["card", "pix", "boleto"],
      metadata: {
        userId: createPaymentParams.userId,
        plan: createPaymentParams.plan,
      },
    });

    const payment = await this.createPaymentRepository.execute({
      ...createPaymentParams,
      externalId: paymentIntent.id,
      status: "PENDING",
    });

    const emailNotification = await this.emailNotificationUseCase.execute({
      ...createPaymentParams,
      recipient: createPaymentParams.email,
      subject: "Confirmação de Pagamento",
      content: `Obrigado por seu pagamento. Você adquiriu o plano: ${createPaymentParams.plan}.`,
      status: EmailStatus.PENDING,
    });

    return { payment, emailNotification };
  }
}
