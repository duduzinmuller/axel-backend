import { Prisma } from "@prisma/client";
import prisma from "../../../prisma/prisma";

export class UpdateUserManagmentRepository {
  async execute(
    userId: string,
    updateUserParams: Partial<Prisma.UserUpdateInput>,
  ) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: updateUserParams,
    });

    return user;
  }
}
