import { CreateUserController } from "../../controller/user/create-user";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { CreateUserUseCase } from "../../use-cases/user/create-user";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();

  const getUserByEmailRepository = new GetUserByEmailRepository();

  const createUserUseCase = new CreateUserUseCase(
    createUserRepository,
    getUserByEmailRepository,
  );

  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
};
