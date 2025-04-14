import { CreateUserSchema } from "../../schemas/user";
import { ZodError } from "zod";
import { CreateUserUseCase } from "../../use-cases/user/create-user";
import { badRequest, created, serverError } from "../helpers/http";

export class CreateUserController {
  createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const params = httpRequest.body;

      await CreateUserSchema.parseAsync(params);

      const result = await this.createUserUseCase.execute(params);

      return created(result);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest(error.errors[0].message);
      }
      console.error(error);
      return serverError();
    }
  }
}
