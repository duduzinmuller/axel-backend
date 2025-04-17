import prisma from "../../../prisma/prisma";
import { EmailVerification } from "../../types/user";

export class ValidateVerificationCodeRepository {
  async execute(emailVerificationParams: EmailVerification) {
    const emailVerification = await prisma.emailVerification.findFirst({
      where: {
        code: emailVerificationParams.code,
      },
    });

    return emailVerification;
  }
}
