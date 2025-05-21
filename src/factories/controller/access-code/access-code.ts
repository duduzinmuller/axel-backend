import { CreateAccessCodeController } from "../../../controller/access-code/create-access-code";
import { ValidateAccessCodeController } from "../../../controller/access-code/validate-access-code";
import { CodeAsUsedRepository } from "../../../repositories/access-code/code-as-used";
import { CreateAccessCodeRepository } from "../../../repositories/access-code/create-access-code";
import { ValidateAccessCodeRepository } from "../../../repositories/access-code/validate-access-code";
import { UpdateUserPlanRepository } from "../../../repositories/user/update-user-plan";
import { CreateAccessCodeUseCase } from "../../../use-cases/access-code/create-access-code";
import { ValidateAccessCodeUseCase } from "../../../use-cases/access-code/validate-access-code";

export const makeCreateAccessController = () => {
  const createAccessCodeRepository = new CreateAccessCodeRepository();

  const createAccessCodeUseCase = new CreateAccessCodeUseCase(
    createAccessCodeRepository,
  );

  const createAccessCodeController = new CreateAccessCodeController(
    createAccessCodeUseCase,
  );

  return createAccessCodeController;
};

export const makeValidateAccessCodeController = () => {
  const validateAccessCodeRepository = new ValidateAccessCodeRepository();
  const codeAsUsedRepository = new CodeAsUsedRepository();
  const updateUserPlanRepository = new UpdateUserPlanRepository();
  const validateAccessCodeUseCase = new ValidateAccessCodeUseCase(
    validateAccessCodeRepository,
    codeAsUsedRepository,
    updateUserPlanRepository,
  );

  const validateAccessCodeController = new ValidateAccessCodeController(
    validateAccessCodeUseCase,
  );

  return validateAccessCodeController;
};
