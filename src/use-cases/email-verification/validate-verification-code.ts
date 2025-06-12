import {
  EmailVerificationExpiredError,
  EmailVerificationInvalidError,
  EmailVerificationNotFoundError,
} from "../../errors/email-verification";
import { ValidateVerificationCodeRepository } from "../../repositories/email-verification/validate-verification-code";
import { EmailVerification } from "../../types/email-verification";

export class ValidateVerificationCodeUseCase {
  constructor(
    private validateVerificationCodeRepository: ValidateVerificationCodeRepository,
  ) {
    this.validateVerificationCodeRepository =
      validateVerificationCodeRepository;
  }

  async execute(emailVerificationParams: EmailVerification) {
    const emailVerification =
      await this.validateVerificationCodeRepository.execute(
        emailVerificationParams,
      );

    if (!emailVerification) {
      throw new EmailVerificationNotFoundError();
    }

    if (emailVerification.expiresAt < new Date()) {
      throw new EmailVerificationExpiredError();
    }

    if (emailVerification.code !== emailVerificationParams.code) {
      throw new EmailVerificationInvalidError();
    }

    return emailVerification;
  }
}
