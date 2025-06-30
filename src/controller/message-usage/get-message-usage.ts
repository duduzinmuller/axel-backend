import { GetMessageUsageUseCase } from "../../use-cases/message-usage/get-message-usage";
import { ok, serverError } from "../helpers/http";

export class GetMessageUsageController {
  constructor(private getMessageUsageUseCase: GetMessageUsageUseCase) {
    this.getMessageUsageUseCase = getMessageUsageUseCase;
  }

  async execute(req: unknown) {
    try {
      const usage = await this.getMessageUsageUseCase.execute();
      return ok(usage);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
