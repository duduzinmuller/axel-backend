import prisma from "../../../prisma/prisma";
import { Payment } from "../../types/payment";

export class UpdatePaymentRepository {
  async execute(updatePaymentParams: Payment) {
    const { name, cpf, payer, ...data } = updatePaymentParams;

    const payment = await prisma.payment.update({
      where: { id: updatePaymentParams.id },
      data: {
        ...data,
        status: updatePaymentParams.status,
        cpf: cpf as string,
        payer: payer as any,
      },
    });

    return payment;
  }
}
