import { CreatePaymentRepository } from "../../repositories/payment/create-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { stripe } from "../../config/stripe";
import { EmailStatus, Payment } from "../../types/user";

export class CreatePaymentUseCase {
  createPaymentRepository: CreatePaymentRepository;
  emailNotificationUseCase: EmailNotificationUseCase;

  constructor(
    createPaymentRepository: CreatePaymentRepository,
    emailNotificationUseCase: EmailNotificationUseCase,
  ) {
    this.createPaymentRepository = createPaymentRepository;
    this.emailNotificationUseCase = emailNotificationUseCase;
  }

  async execute(createPaymentParams: Payment) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: createPaymentParams.amount,
      currency: "brl",
      payment_method_types: ["card", "boleto", "pix"],
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
      recipient: createPaymentParams.recipient,
      subject: "Confirmação de Pagamento",
      content: `Obrigado por seu pagamento. Você adquiriu o plano: ${createPaymentParams.plan}.`,
      status: EmailStatus.PENDING,
    });

    return { payment, emailNotification };
  }
}
