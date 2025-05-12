import prisma from "../../../prisma/prisma";

export class UpdateUserPasswordRepository {
  async execute(params: {
    id: string;
    password: string;
    resetPasswordToken: string | null;
    resetPasswordTokenExpires: Date | null;
  }) {
    const user = await prisma.user.update({
      where: { id: params.id },
      data: {
        password: params.password,
        resetPasswordToken: params.resetPasswordToken,
        resetPasswordTokenExpires: params.resetPasswordTokenExpires,
      },
    });

    return user;
  }
}
