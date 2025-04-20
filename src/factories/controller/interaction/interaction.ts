import { CreateInteractionController } from "../../../controller/interaction/create-transaction";
import { CreateInteractionUseCase } from "../../../use-cases/interaction/create-interaction";
import { CreateInteractionRepository } from "../../../repositories/interaction/create-interaction";

export const makeCreateInteractionController = () => {
  const createInteractionRepository = new CreateInteractionRepository();

  const createInteractionUseCase = new CreateInteractionUseCase(
    createInteractionRepository,
  );

  const createInteractionController = new CreateInteractionController(
    createInteractionUseCase,
  );

  return createInteractionController;
};
