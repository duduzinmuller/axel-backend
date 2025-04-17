import { CreateAccessCodeRepository } from "../../repositories/access-code/access-code";
import { AccessCode } from "../../types/user";
import { generateRandomCode } from "../../utils/access-code-random";

export class CreateAccessCodeUseCase {
  createAccessCodeRepository: CreateAccessCodeRepository;
  constructor(createAccessCodeRepository: CreateAccessCodeRepository) {
    this.createAccessCodeRepository = createAccessCodeRepository;
  }

  async execute(accessCodeParams: AccessCode) {
    const code = generateRandomCode();
    const result = await this.createAccessCodeRepository.execute({
      ...accessCodeParams,
      code,
    });

    return result;
  }
}
