import prisma from "../../../prisma/prisma";
import { Payment } from "../../types/payment";

export class CreatePaymentRepository {
  async execute(createPaymentParams: Payment) {
    const { name, ...data } = createPaymentParams;

    const payment = await prisma.payment.create({
      data: {
        ...data,
        currency: createPaymentParams.currency,
        status: "PENDING",
        payer: data.payer ? (data.payer as unknown as object) : undefined,
      },
    });

    return payment;
  }
}
