import { GetEmailVerificationRepository } from "../../repositories/email-verification/get-email-verification";
import { EmailVerification } from "../../types/email-verification";

export class GetEmailVerificationUseCase {
  constructor(
    private getEmailVerificationRepository: GetEmailVerificationRepository,
  ) {
    this.getEmailVerificationRepository = getEmailVerificationRepository;
  }
  async execute(emailVerificationParams: EmailVerification) {
    const emailVerification = await this.getEmailVerificationRepository.execute(
      emailVerificationParams,
    );

    return emailVerification;
  }
}
