import { CreateInteractionUseCase } from "../../use-cases/interaction/create-interaction";
import { created, serverError } from "../helpers/http";

export class CreateInteractionController {
  createInteractionUseCase: CreateInteractionUseCase;

  constructor(createInteractionUseCase: CreateInteractionUseCase) {
    this.createInteractionUseCase = createInteractionUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const params = httpRequest.body;

      const interaction = await this.createInteractionUseCase.execute(params);

      return created(interaction);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
