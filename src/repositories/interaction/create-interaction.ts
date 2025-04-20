import prisma from "../../../prisma/prisma";
import { Interaction } from "../../types/user";

export class CreateInteractionRepository {
  async execute(createInteractionParams: Interaction) {
    const interaction = await prisma.interaction.create({
      data: {
        id: createInteractionParams.id,
        userId: createInteractionParams.userId,
        input: createInteractionParams.input,
        response: createInteractionParams.response,
        context: createInteractionParams.context,
      },
    });
    return interaction;
  }
}
