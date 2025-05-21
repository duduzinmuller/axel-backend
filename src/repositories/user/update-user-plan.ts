import prisma from "../../../prisma/prisma";

export class UpdateUserPlanRepository {
  async execute(userId: string, plan: string) {
    return prisma.user.update({
      where: { id: userId },
      data: { plan: plan as any },
    });
  }
}
