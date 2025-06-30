import prisma from "../../../prisma/prisma";

export class GetPaymentHistoryRepository {
  async execute() {
    const payment = await prisma.payment.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            plan: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return payment;
  }
}
