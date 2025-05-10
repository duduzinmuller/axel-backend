import { CreateVerificationRepository } from "../../repositories/email-verification/email-verification";
import { EmailVerification } from "../../types/user";
import { generateCode } from "../../utils/code-generator";
import { v4 as uuidv4 } from "uuid";
import { sendVerificationEmail } from "../../services/email-service";
import prisma from "../../../prisma/prisma";
import { UserNotFoundError } from "../../errors/user";

export class CreateVerificationUseCase {
  createVerificationRepository: CreateVerificationRepository;
  constructor(createVerificationRepository: CreateVerificationRepository) {
    this.createVerificationRepository = createVerificationRepository;
  }
  async execute(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UserNotFoundError("Usuarío não encontrado");
    }

    const code = generateCode();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const emailVerification: EmailVerification = {
      id: uuidv4(),
      email,
      userId: user.id,
      code,
      expiresAt,
      createdAt: new Date(),
    };

    const result =
      await this.createVerificationRepository.execute(emailVerification);
    await sendVerificationEmail(email, code);

    return result;
  }
}
