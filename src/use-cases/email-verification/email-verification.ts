import { CreateVerificationRepository } from "../../repositories/email-verification/email-verification";
import { EmailVerification } from "../../types/user";
import { generateCode } from "../../utils/code-generator";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "../../services/email-service";

export class CreateVerificationUseCase {
  createVerificationRepository: CreateVerificationRepository;
  constructor(createVerificationRepository: CreateVerificationRepository) {
    this.createVerificationRepository = createVerificationRepository;
  }
  async execute(email: string, userId: string, contactId: string) {
    const code = generateCode();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const emailVerification: EmailVerification = {
      id: uuidv4(),
      email,
      userId,
      code,
      expiresAt,
      contactId,
      createdAt: new Date(),
    };

    const result =
      await this.createVerificationRepository.execute(emailVerification);
    await sendVerificationEmail(email, code);

    return result;
  }
}
