import { CreateAccessCodeController } from "../../../controller/access-code/create-access-code";
import { CreateAccessCodeRepository } from "../../../repositories/access-code/create-access-code";
import { CreateAccessCodeUseCase } from "../../../use-cases/access-code/create-access-code";

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
