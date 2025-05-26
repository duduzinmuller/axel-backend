import { CreatePaymentRepository } from "../../repositories/payment/create-payment";
import { EmailNotificationUseCase } from "../email-notification/email-notification";
import { EmailStatus, Payment } from "../../types/user";
import {
  mercadopago,
  Payment as MercadoPagoPayment,
} from "../../config/mercadopago";
import { isValidCpf, removeCpfPunctuation } from "../../utils/cpf";

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
    if (!createPaymentParams.cpf) {
      throw new Error("CPF não informado.");
    }
    const cpfSemPontuacao = removeCpfPunctuation(createPaymentParams.cpf);
    if (!isValidCpf(cpfSemPontuacao)) {
      throw new Error("CPF inválido.");
    }

    const [firstName, ...rest] = createPaymentParams.name.split(" ");
    const lastName = rest.join(" ");

    const mpPayment = new MercadoPagoPayment(mercadopago);

    const paymentResponse = await mpPayment.create({
      body: {
        transaction_amount: createPaymentParams.amount,
        payment_method_id: createPaymentParams.paymentMethod,
        payer: {
          email: createPaymentParams.recipient,
          first_name: firstName,
          last_name: lastName,
          identification: {
            type: "CPF",
            number: cpfSemPontuacao,
          },
        },
        description: `Plano: ${createPaymentParams.plan}`,
        metadata: {
          userId: createPaymentParams.userId,
          plan: createPaymentParams.plan,
        },
      },
    });

    const payment = await this.createPaymentRepository.execute({
      ...createPaymentParams,
      status: "PENDING",
    });

    const emailNotification = await this.emailNotificationUseCase.execute({
      ...createPaymentParams,
      recipient: createPaymentParams.recipient,
      subject: "Confirmação de Pagamento",
      content: `Obrigado por seu pagamento. Você adquiriu o plano: ${createPaymentParams.plan}.`,
      status: EmailStatus.PENDING,
    });

    return { payment, emailNotification, mercadoPago: paymentResponse };
  }
}
