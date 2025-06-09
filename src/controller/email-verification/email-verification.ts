import { ZodError } from "zod";
import { CreateEmailVerificationSchema } from "../../schemas/email-verification/email-verification";
import { CreateVerificationUseCase } from "../../use-cases/email-verification/email-verification";
import { ok, serverError, badRequest, notFound } from "../helpers/http";
import { UserNotFoundError } from "../../errors/user";
import { HttpRequest } from "../../types/httpRequest";

export class CreateVerificationController {
  createVerificationUseCase: CreateVerificationUseCase;
  constructor(createVerificationUseCase: CreateVerificationUseCase) {
    this.createVerificationUseCase = createVerificationUseCase;
  }
  async execute(httpRequest: HttpRequest) {
    try {
      const { email } = httpRequest.body;

      await CreateEmailVerificationSchema.parseAsync(httpRequest.body);

      const result = await this.createVerificationUseCase.execute(email);

      return ok(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }
      if (error instanceof UserNotFoundError) {
        return notFound("Usuario não encontrado");
      }
      console.error(error);
      return serverError();
    }
  }
}
