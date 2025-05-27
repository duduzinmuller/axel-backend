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

    if (!createPaymentParams.name) {
      throw new Error("Nome não informado.");
    }
    const [firstName, ...rest] = createPaymentParams.name.split(" ");
    const lastName = rest.join(" ") || "-";

    const payer: any = {
      email: createPaymentParams.recipient,
      first_name: firstName,
      last_name: lastName,
      identification: {
        type: "CPF",
        number: cpfSemPontuacao,
      },
    };

    if (createPaymentParams.paymentMethod === "bolbradesco") {
      payer.address = {
        zip_code: createPaymentParams.zip_code,
        street_name: createPaymentParams.street_name,
        street_number: createPaymentParams.street_number,
        neighborhood: createPaymentParams.neighborhood,
        city: createPaymentParams.city,
        federal_unit: createPaymentParams.federal_unit,
      };
      const requiredAddress = [
        "zip_code",
        "street_name",
        "street_number",
        "neighborhood",
        "city",
        "federal_unit",
      ];
      for (const field of requiredAddress) {
        if (!(createPaymentParams as any)[field]) {
          throw new Error(`Campo de endereço obrigatório: ${field}`);
        }
      }
    }

    const paymentBody: any = {
      transaction_amount: createPaymentParams.amount,
      payment_method_id: createPaymentParams.paymentMethod,
      payer,
      description: `Plano: ${createPaymentParams.plan}`,
      metadata: {
        userId: createPaymentParams.userId,
        plan: createPaymentParams.plan,
      },
    };

    if (
      createPaymentParams.paymentMethod === "visa" ||
      createPaymentParams.paymentMethod === "master" ||
      createPaymentParams.paymentMethod === "amex"
    ) {
      if (!createPaymentParams.token) {
        throw new Error("Token do cartão não informado.");
      }
      paymentBody.token = createPaymentParams.token;
    }

    const mpPayment = new MercadoPagoPayment(mercadopago);

    const paymentResponse = await mpPayment.create({
      body: paymentBody,
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
