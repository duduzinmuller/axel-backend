import { ZodError } from "zod";
import { CreateAccessCodeSchema } from "../../schemas/access-code/access-code";
import { CreateAccessCodeUseCase } from "../../use-cases/access-code/create-access-code";
import { badRequest, ok, serverError } from "../helpers/http";
import { HttpRequest } from "../../types/httpRequest";

export class CreateAccessCodeController {
  createAccessCodeUseCase: CreateAccessCodeUseCase;
  constructor(createAccessCodeUseCase: CreateAccessCodeUseCase) {
    this.createAccessCodeUseCase = createAccessCodeUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.body;

      await CreateAccessCodeSchema().parseAsync(params);

      const accessCode = await this.createAccessCodeUseCase.execute(params);

      return ok(accessCode);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }
      console.error(error);
      return serverError();
    }
  }
}
