import { CreateVerificationUseCase } from "../../use-cases/email-verification/email-verification";
import { ok, serverError, badRequest } from "../helpers/http";

export class CreateVerificationController {
  createVerificationUseCase: CreateVerificationUseCase;
  constructor(createVerificationUseCase: CreateVerificationUseCase) {
    this.createVerificationUseCase = createVerificationUseCase;
  }
  async execute(httpRequest: any) {
    try {
      const { email, userId, contactId } = httpRequest.body;

      if (!email || !userId || !contactId) {
        return badRequest("Missing required fields: email, userId, contactId");
      }

      const result = await this.createVerificationUseCase.execute(
        email,
        userId,
        contactId,
      );

      return ok(result);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
