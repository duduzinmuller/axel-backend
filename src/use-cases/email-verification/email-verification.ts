import { CreateVerificationRepository } from "../../repositories/email-verification/email-verification";
import { EmailVerification } from "../../types/user";
import { generateCode } from "../../utils/code-generator";
import { v4 as uuidv4 } from "uuid";

export class CreateVerificationUseCase {
  createVerificationRepository: CreateVerificationRepository;
  constructor(createVerificationRepository: CreateVerificationRepository) {
    this.createVerificationRepository = createVerificationRepository;
  }
  async execute(emailVerificationParams: EmailVerification) {
    const code = generateCode();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const emailVerification: EmailVerification = {
      id: uuidv4(),
      userId: emailVerificationParams.userId,
      code,
      expiresAt,
      contactId: emailVerificationParams.contactId,
      createdAt: new Date(),
    };

    const result =
      await this.createVerificationRepository.execute(emailVerification);

    return result;
  }
}
