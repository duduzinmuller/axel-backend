import { ValidateAccessCodeRepository } from "../../controller/access-code/validate-access-code";
import {
  AccessCodeExpiredError,
  AccessCodeNotFoundError,
} from "../../errors/access-code";

export class ValidateAccessCodeUseCase {
  validateAccessCodeRepository: ValidateAccessCodeRepository;
  constructor(validateAccessCodeRepository: ValidateAccessCodeRepository) {
    this.validateAccessCodeRepository = validateAccessCodeRepository;
  }
  async execute(code: string) {
    const accessCode = await this.validateAccessCodeRepository.execute(code);

    if (!accessCode) {
      throw new AccessCodeNotFoundError();
    }

    if (accessCode.expiresAt < new Date()) {
      throw new AccessCodeExpiredError();
    }

    return accessCode;
  }
}
