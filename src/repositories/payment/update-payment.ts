import prisma from "../../../prisma/prisma";
import { Payment } from "../../types/payment";

export class UpdatePaymentRepository {
  async execute(updatePaymentParams: Payment) {
    const payment = await prisma.payment.findFirst({
      where: { externalId: updatePaymentParams.externalId },
    });

    if (!payment) {
      throw new Error("Pagamento não encontrado");
    }

    const updatedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: {
        ...updatePaymentParams,
        cpf: updatePaymentParams.cpf as string,
        payer: updatePaymentParams.payer as any,
      },
    });

    return updatedPayment;
  }
}
