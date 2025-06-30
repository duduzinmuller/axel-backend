import prisma from "../../../prisma/prisma";
import { EmailVerification } from "../../types/email-verification";

export class GetEmailVerificationRepository {
  async execute(emailVerificationParams: EmailVerification) {
    const emailVerification = await prisma.emailVerification.findMany({
      where: emailVerificationParams,
    });

    return emailVerification;
  }
}
