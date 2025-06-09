import prisma from "../../../prisma/prisma";
import { EmailVerification } from "../../types/email-verification";

export class ValidateVerificationCodeRepository {
  async execute(emailVerificationParams: EmailVerification) {
    const emailVerification = await prisma.emailVerification.findFirst({
      where: {
        userId: emailVerificationParams.userId,
        code: emailVerificationParams.code,
      },
    });

    return emailVerification;
  }
}
