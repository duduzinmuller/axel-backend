import prisma from "../../../prisma/prisma";

export class GetUserByResetTokenRepository {
  async execute(token: string) {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
      },
    });

    return user;
  }
}
