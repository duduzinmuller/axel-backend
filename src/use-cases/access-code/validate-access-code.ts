import { ValidateAccessCodeRepository } from "../../repositories/access-code/validate-access-code";
import {
  AccessCodeExpiredError,
  AccessCodeNotFoundError,
  AccessCodeAlreadyUsedError,
} from "../../errors/access-code";
import { CodeAsUsedRepository } from "../../repositories/access-code/code-as-used";
import { UpdateUserPlanRepository } from "../../repositories/user/update-user-plan";

export class ValidateAccessCodeUseCase {
  validateAccessCodeRepository: ValidateAccessCodeRepository;
  codeAsUsedRepository: CodeAsUsedRepository;
  updateUserPlanRepository: UpdateUserPlanRepository;
  constructor(
    validateAccessCodeRepository: ValidateAccessCodeRepository,
    codeAsUsedRepository: CodeAsUsedRepository,
    updateUserPlanRepository: UpdateUserPlanRepository,
  ) {
    this.validateAccessCodeRepository = validateAccessCodeRepository;
    this.codeAsUsedRepository = codeAsUsedRepository;
    this.updateUserPlanRepository = updateUserPlanRepository;
  }
  async execute(userId: string, code: string) {
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

    await this.updateUserPlanRepository.execute(userId, accessCode.plan);

    const result = await this.codeAsUsedRepository.execute(code);

    return result;
  }
}
