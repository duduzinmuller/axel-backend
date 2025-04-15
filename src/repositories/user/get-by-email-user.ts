import prisma from "../../../prisma/prisma";

export class GetUserByEmailRepository {
  async execute(email: any) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
