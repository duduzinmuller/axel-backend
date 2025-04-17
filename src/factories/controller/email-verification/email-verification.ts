import { CreateVerificationController } from "../../../controller/email-verification/email-verification";
import { ValidateVerificationCodeController } from "../../../controller/email-verification/validate-verification-code";
import { CreateVerificationRepository } from "../../../repositories/email-verification/email-verification";
import { ValidateVerificationCodeRepository } from "../../../repositories/email-verification/validate-verification-code";
import { CreateVerificationUseCase } from "../../../use-cases/email-verification/email-verification";
import { ValidateVerificationCodeUseCase } from "../../../use-cases/email-verification/validate-verification-code";

export const makeVerificationController = () => {
  const createVerificationRepository = new CreateVerificationRepository();

  const createVerificationUseCase = new CreateVerificationUseCase(
    createVerificationRepository,
  );

  const createVerificationController = new CreateVerificationController(
    createVerificationUseCase,
  );

  return createVerificationController;
};

export const makeValidateVerificationCodeController = () => {
  const validateVerificationCodeRepository =
    new ValidateVerificationCodeRepository();

  const validateVerificationCodeUseCase = new ValidateVerificationCodeUseCase(
    validateVerificationCodeRepository,
  );

  const validateVerificationCodeController =
    new ValidateVerificationCodeController(validateVerificationCodeUseCase);

  return validateVerificationCodeController;
};
