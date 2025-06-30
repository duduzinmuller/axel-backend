import prisma from "../../../prisma/prisma";
import { PaymentStatusPercentage } from "../../types/payment";

export class GetPaymentStatusPercentageRepository {
  async execute(): Promise<PaymentStatusPercentage[]> {
    const totalPayments = await prisma.payment.count();

    if (totalPayments === 0) {
      return [];
    }

    const statusCounts = await prisma.payment.groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
    });

    const statusPercentages: PaymentStatusPercentage[] = statusCounts.map(
      (statusCount) => ({
        status: statusCount.status,
        count: statusCount._count.status,
        percentage: Number(
          ((statusCount._count.status / totalPayments) * 100).toFixed(2),
        ),
      }),
    );

    return statusPercentages;
  }
}
