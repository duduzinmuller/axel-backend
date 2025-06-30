import { CreateVerificationController } from "../../../controller/email-verification/email-verification";
import { GetEmailVerificationController } from "../../../controller/email-verification/get-email-verification";
import { ValidateVerificationCodeController } from "../../../controller/email-verification/validate-verification-code";
import { CreateVerificationRepository } from "../../../repositories/email-verification/email-verification";
import { GetEmailVerificationRepository } from "../../../repositories/email-verification/get-email-verification";
import { ValidateVerificationCodeRepository } from "../../../repositories/email-verification/validate-verification-code";
import { CreateUserRepository } from "../../../repositories/user/create-user";
import { CreateVerificationUseCase } from "../../../use-cases/email-verification/email-verification";
import { GetEmailVerificationUseCase } from "../../../use-cases/email-verification/get-email-verification";
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

  const createUserRepository = new CreateUserRepository();

  const validateVerificationCodeController =
    new ValidateVerificationCodeController(
      validateVerificationCodeUseCase,
      createUserRepository,
    );

  return validateVerificationCodeController;
};

export const makeGetEmailVerificationController = () => {
  const getEmailVerificationRepository = new GetEmailVerificationRepository();

  const getEmailVerificationUseCase = new GetEmailVerificationUseCase(
    getEmailVerificationRepository,
  );

  const getEmailVerificationController = new GetEmailVerificationController(
    getEmailVerificationUseCase,
  );

  return getEmailVerificationController;
};
