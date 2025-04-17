import { CreateVerificationController } from "../../../controller/email-verification/email-verification";
import { CreateVerificationRepository } from "../../../repositories/email-verification/email-verification";
import { CreateVerificationUseCase } from "../../../use-cases/email-verification/email-verification";

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
