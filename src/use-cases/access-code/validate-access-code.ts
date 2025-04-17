import { ValidateAccessCodeRepository } from "../../repositories/access-code/validate-access-code";
import {
  AccessCodeExpiredError,
  AccessCodeNotFoundError,
  AccessCodeAlreadyUsedError,
} from "../../errors/access-code";
import { CodeAsUsedRepository } from "../../repositories/access-code/code-as-used";

export class ValidateAccessCodeUseCase {
  validateAccessCodeRepository: ValidateAccessCodeRepository;
  codeAsUsedRepository: CodeAsUsedRepository;
  constructor(
    validateAccessCodeRepository: ValidateAccessCodeRepository,
    codeAsUsedRepository: CodeAsUsedRepository,
  ) {
    this.validateAccessCodeRepository = validateAccessCodeRepository;
    this.codeAsUsedRepository = codeAsUsedRepository;
  }
  async execute(code: string) {
    const accessCode = await this.validateAccessCodeRepository.execute(code);

    if (!accessCode) {
      throw new AccessCodeNotFoundError();
    }

    if (accessCode.expiresAt < new Date()) {
      throw new AccessCodeExpiredError();
    }

    if (accessCode.used) {
      throw new AccessCodeAlreadyUsedError();
    }

    const result = await this.codeAsUsedRepository.execute(code);

    return result;
  }
}
