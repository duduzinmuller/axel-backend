import { v4 as uuidv4 } from "uuid";
import prisma from "../../../prisma/prisma";
import { User } from "../../types/user";

export class GenerateResetTokenUseCase {
  async execute(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const token = uuidv4();
    const expires = new Date(Date.now() + 1000 * 60 * 60);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: token,
        resetPasswordTokenExpires: expires,
      },
    });

    return { email: user.email, token };
  }
}
