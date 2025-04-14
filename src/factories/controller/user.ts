import { CreateUserController } from "../../controller/user/create-user";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { CreateUserUseCase } from "../../use-cases/user/create-user";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();

  const createUserUseCase = new CreateUserUseCase(createUserRepository);

  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
};
