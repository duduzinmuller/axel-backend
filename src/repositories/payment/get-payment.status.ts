import prisma from "../../../prisma/prisma";

export class GetPaymentStatusRepository {
  async execute(paymentId: string) {
    return prisma.payment.findUnique({ where: { id: paymentId } });
  }
}
