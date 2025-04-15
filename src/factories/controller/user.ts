import { IdGeneratorAdapter } from "../../adapters/id-generator";
import { PasswordHasherAdapter } from "../../adapters/password-hasher";
import { CreateUserController } from "../../controller/user/create-user";
import { DeleteUserController } from "../../controller/user/delete-user";
import { GetUserByIdController } from "../../controller/user/get-user-by-id";
import { UpdateUserController } from "../../controller/user/update-user";
import { CreateUserRepository } from "../../repositories/user/create-user";
import { DeleteUserRepository } from "../../repositories/user/delete-user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { GetUserByIdRepository } from "../../repositories/user/get-by-id-user";
import { UpdateUserRepository } from "../../repositories/user/update-user";
import { CreateUserUseCase } from "../../use-cases/user/create-user";
import { DeleteUserUseCase } from "../../use-cases/user/delete-user";
import { GetUserByIdUseCase } from "../../use-cases/user/get-user-by-id";
import { UpdateUserUseCase } from "../../use-cases/user/update-user";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();

  const getUserByEmailRepository = new GetUserByEmailRepository();

  const idGeneratorAdapter = new IdGeneratorAdapter();

  const passwordHasherAdapter = new PasswordHasherAdapter();

  const createUserUseCase = new CreateUserUseCase(
    createUserRepository,
    getUserByEmailRepository,
    idGeneratorAdapter,
    passwordHasherAdapter,
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

export const makeUpdateUserController = () => {
  const getUserByEmailRepository = new GetUserByEmailRepository();

  const updateUserRepository = new UpdateUserRepository();

  const passwordHasherAdapter = new PasswordHasherAdapter();

  const updateUserUseCase = new UpdateUserUseCase(
    getUserByEmailRepository,
    updateUserRepository,
    passwordHasherAdapter,
  );

  const updateUserController = new UpdateUserController(updateUserUseCase);

  return updateUserController;
};

export const makeDeleteUserController = () => {
  const deleteUserRepository = new DeleteUserRepository();

  const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository);

  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
};
