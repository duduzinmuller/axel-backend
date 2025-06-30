import prisma from "../../../prisma/prisma";
import { PlanPercentage } from "../../types/user";

export class GetUserPlanRepository {
  async execute(): Promise<PlanPercentage[]> {
    const totalUsers = await prisma.user.count();

    if (totalUsers === 0) {
      return [];
    }

    const planCounts = await prisma.user.groupBy({
      by: ["plan"],
      _count: {
        plan: true,
      },
    });

    const planPercentages: PlanPercentage[] = planCounts.map((planCount) => ({
      plan: planCount.plan,
      count: planCount._count.plan,
      percentage: Number(
        ((planCount._count.plan / totalUsers) * 100).toFixed(2),
      ),
    }));

    return planPercentages;
  }
}
