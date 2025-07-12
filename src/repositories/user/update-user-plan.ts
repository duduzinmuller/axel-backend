import prisma from "../../../prisma/prisma";

export class UpdateUserPlanRepository {
  async execute(userId: string, plan: string) {
    let planExpiresAt = null;
    const now = new Date();

    if (plan === "MONTHLY") {
      planExpiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    } else if (plan === "ANNUAL") {
      planExpiresAt = new Date(
        now.getFullYear() + 1,
        now.getMonth(),
        now.getDate(),
      );
    }

    return prisma.user.update({
      where: { id: userId },
      data: {
        plan: plan as any,
        planExpiresAt,
      },
    });
  }
}
