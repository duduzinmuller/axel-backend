import { CreateInteractionRepository } from "../../repositories/interaction/create-interaction";
import { Interaction } from "../../types/user";

export class CreateInteractionUseCase {
  createInteractionRepository: CreateInteractionRepository;

  constructor(createInteractionRepository: CreateInteractionRepository) {
    this.createInteractionRepository = createInteractionRepository;
  }

  async execute(createInteractionParams: Interaction) {
    const interaction = await this.createInteractionRepository.execute(
      createInteractionParams,
    );

    return interaction;
  }
}
