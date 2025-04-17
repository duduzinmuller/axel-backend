import { ZodError } from "zod";
import { CreateEmailVerificationSchema } from "../../schemas/email-verification/email-verification";
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

      await CreateEmailVerificationSchema.parseAsync(httpRequest.body);

      const result = await this.createVerificationUseCase.execute(
        email,
        userId,
        contactId,
      );

      return ok(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.message);
      }
      console.error(error);
      return serverError();
    }
  }
}
