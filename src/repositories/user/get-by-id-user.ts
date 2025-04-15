import prisma from "../../../prisma/prisma";

export class GetUserByIdRepository {
  async execute(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }
}
