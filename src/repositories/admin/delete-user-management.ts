import prisma from "../../../prisma/prisma";

export class DeleteUserManagementRepository {
  async execute(userId: string) {
    const user = await prisma.user.delete({
      where: { id: userId },
    });

    return user;
  }
}
