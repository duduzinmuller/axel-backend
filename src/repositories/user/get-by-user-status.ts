import prisma from "../../../prisma/prisma";

export class GetByUserStatusRepository {
  async execute() {
    const counts = await prisma.user.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    const result: Record<string, number> = {
      ACTIVE: 0,
      PENDING: 0,
      INACTIVE: 0,
    };

    counts.forEach((item) => {
      result[item.status] = item._count.status;
    });

    return result;
  }
}
