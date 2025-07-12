import prisma from "../../../prisma/prisma";

export class GetUserManagmentRepository {
  async execute(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }
}
