import { CreateVerificationRepository } from "../../repositories/email-verification/email-verification";
import { EmailVerification } from "../../types/user";

export class CreateVerificationUseCase {
  createVerificationRepository: CreateVerificationRepository;
  constructor(createVerificationRepository: CreateVerificationRepository) {
    this.createVerificationRepository = createVerificationRepository;
  }
  async execute(emailVerificationParams: EmailVerification) {
    const result = await this.createVerificationRepository.execute(
      emailVerificationParams,
    );
    return result;
  }
}
