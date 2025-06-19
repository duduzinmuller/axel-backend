import prisma from "../../../prisma/prisma";

export class MessageUsageRepository {
  async getCurrentDayUsage(userId: string) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const usage = await prisma.messageUsage.findUnique({
      where: {
        userId_day_month_year: {
          userId,
          day,
          month,
          year,
        },
      },
    });

    return usage;
  }

  async incrementUsage(userId: string) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const usage = await prisma.messageUsage.upsert({
      where: {
        userId_day_month_year: {
          userId,
          day,
          month,
          year,
        },
      },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        userId,
        day,
        month,
        year,
        count: 1,
      },
    });

    return usage;
  }

  async getUserPlan(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { plan: true },
    });

    return user?.plan;
  }
}
