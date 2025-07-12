import prisma from "../../../prisma/prisma";

export class UpdateUserManagmentRepository {
  async execute(id: string, updateUserParams: any) {
    const user = await prisma.user.update({
      where: { id },
      data: updateUserParams,
    });

    return user;
  }
}
