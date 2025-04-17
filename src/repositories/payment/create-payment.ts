import prisma from "../../../prisma/prisma";
import { Payment } from "../../types/user";

export class CreatePaymentRepository {
  async execute(createPaymentParams: Payment) {
    const payment = await prisma.payment.create({
      data: {
        ...createPaymentParams,
        status: "PENDING",
      },
    });

    return payment;
  }
}
