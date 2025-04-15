import { CreateUserController } from "../../controller/user/create-user";
import { GetUserByIdController } from "../../controller/user/get-user-by-id";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { GetUserByIdRepository } from "../../repositories/user/get-by-id-user";
import { CreateUserUseCase } from "../../use-cases/user/create-user";
import { GetUserByIdUseCase } from "../../use-cases/user/get-user-by-id";

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

export const makeGetUserByIdController = () => {
  const getUserByIdRepository = new GetUserByIdRepository();

  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);

  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

  return getUserByIdController;
};
