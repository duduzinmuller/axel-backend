import prisma from "../../../prisma/prisma";
import { Payment } from "../../types/user";

export class UpdatePaymentRepository {
  async execute(updatePaymentParams: Payment) {
    const payment = await prisma.payment.update({
      where: { id: updatePaymentParams.id },
      data: {
        ...updatePaymentParams,
        status: updatePaymentParams.status,
      },
    });

    return payment;
  }
}
