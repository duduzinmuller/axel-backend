import prisma from "../../../prisma/prisma";

export class UserManagementRepository {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, updateData: any) {
    return prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteById(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }

  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        plan: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
