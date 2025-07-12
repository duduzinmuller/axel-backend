import prisma from "../../../prisma/prisma";

export class UpdateUserManagmentRepository {
  async execute(userId: string, updateUserParams: any) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: updateUserParams,
    });

    return user;
  }
}
