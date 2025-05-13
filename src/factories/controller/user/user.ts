import { IdGeneratorAdapter } from "../../../adapters/id-generator";
import { PasswordComparatorAdapter } from "../../../adapters/password-comparator";
import { PasswordHasherAdapter } from "../../../adapters/password-hasher";
import { TokensGeneratorAdapter } from "../../../adapters/token-generator";
import { TokensVerifierAdapter } from "../../../adapters/token-verifier";
import { CreateUserController } from "../../../controller/user/create-user";
import { DeleteUserController } from "../../../controller/user/delete-user";
import { GetOrCreateUserByProviderController } from "../../../controller/user/get-or-create-user-by-provider";
import { GetUserByIdController } from "../../../controller/user/get-user-by-id";
import { LoginUserController } from "../../../controller/user/login-user";
import { RefreshTokenController } from "../../../controller/user/refresh-token";
import { UpdateUserController } from "../../../controller/user/update-user";
import { CreateVerificationRepository } from "../../../repositories/email-verification/email-verification";
import { CreateUserRepository } from "../../../repositories/user/create-user";
import { DeleteUserRepository } from "../../../repositories/user/delete-user";
import { GetUserByEmailRepository } from "../../../repositories/user/get-by-email-user";
import { GetUserByIdRepository } from "../../../repositories/user/get-by-id-user";
import { GetOrCreateUserByProviderRepository } from "../../../repositories/user/get-or-create-user-by-provider";
import { UpdateUserRepository } from "../../../repositories/user/update-user";
import { CreateVerificationUseCase } from "../../../use-cases/email-verification/email-verification";
import { CreateUserUseCase } from "../../../use-cases/user/create-user";
import { DeleteUserUseCase } from "../../../use-cases/user/delete-user";
import { GetOrCreateUserByProviderUseCase } from "../../../use-cases/user/get-or-create-user-by-provider";
import { GetUserByIdUseCase } from "../../../use-cases/user/get-user-by-id";
import { LoginUserUseCase } from "../../../use-cases/user/login-user";
import { RefreshTokenUseCase } from "../../../use-cases/user/refresh-token";
import { UpdateUserUseCase } from "../../../use-cases/user/update-user";

import { ResetPasswordUseCase } from "../../../use-cases/user/reset-password";
import { GetUserByResetTokenRepository } from "../../../repositories/user/get-by-reset-token-user";
import { UpdateUserPasswordRepository } from "../../../repositories/user/update-password-user";
import { ResetPasswordController } from "../../../controller/user/reset-password";
import { GenerateResetTokenUseCase } from "../../../use-cases/user/generate-reset-token";
import { SendResetPasswordEmailService } from "../../../services/send-reset-password-email";
import { RequestResetPasswordController } from "../../../controller/user/request-reset-password-controller";

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository();

  const getUserByEmailRepository = new GetUserByEmailRepository();

  const idGeneratorAdapter = new IdGeneratorAdapter();

  const passwordHasherAdapter = new PasswordHasherAdapter();

  const tokensGeneratorAdapter = new TokensGeneratorAdapter();

  const createUserUseCase = new CreateUserUseCase(
    createUserRepository,
    getUserByEmailRepository,
    idGeneratorAdapter,
    passwordHasherAdapter,
    tokensGeneratorAdapter,
  );

  const createVerificatioRepository = new CreateVerificationRepository();

  const createVerificationUseCase = new CreateVerificationUseCase(
    createVerificatioRepository,
  );

  const createUserController = new CreateUserController(
    createUserUseCase,
    createVerificationUseCase,
  );

  return createUserController;
};

export const makeLoginUserController = () => {
  const getUserByEmailRepository = new GetUserByEmailRepository();

  const passwordComparatorAdapter = new PasswordComparatorAdapter();

  const tokensGeneratorAdapter = new TokensGeneratorAdapter();

  const loginUserUseCase = new LoginUserUseCase(
    getUserByEmailRepository,
    passwordComparatorAdapter,
    tokensGeneratorAdapter,
  );

  const loginUserController = new LoginUserController(loginUserUseCase);

  return loginUserController;
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

export const makeRefreshTokenController = () => {
  const tokensVerifierAdapter = new TokensVerifierAdapter();

  const tokensGeneratorAdapter = new TokensGeneratorAdapter();

  const refreshTokenUseCase = new RefreshTokenUseCase(
    tokensGeneratorAdapter,
    tokensVerifierAdapter,
  );

  const refreshTokenController = new RefreshTokenController(
    refreshTokenUseCase,
  );

  return refreshTokenController;
};

export const makeGetOrCreateUserByProviderController = () => {
  const getOrCreateUserByProviderRepository =
    new GetOrCreateUserByProviderRepository();

  const tokensGeneratorAdapter = new TokensGeneratorAdapter();

  const getOrCreateUserByProviderUseCase = new GetOrCreateUserByProviderUseCase(
    getOrCreateUserByProviderRepository,
    tokensGeneratorAdapter,
  );

  const getOrCreateUserByProviderController =
    new GetOrCreateUserByProviderController(getOrCreateUserByProviderUseCase);

  return getOrCreateUserByProviderController;
};

export const makeResetPasswordController = () => {
  const getUserByResetTokenRepository = new GetUserByResetTokenRepository();
  const updateUserPasswordRepository = new UpdateUserPasswordRepository();
  const passwordHasherAdapter = new PasswordHasherAdapter();
  const resetPasswordUseCase = new ResetPasswordUseCase(
    getUserByResetTokenRepository,
    updateUserPasswordRepository,
    passwordHasherAdapter,
  );
  const controller = new ResetPasswordController(resetPasswordUseCase);

  return controller;
};

export const makeRequestResetPasswordController = () => {
  const generateResetTokenUseCase = new GenerateResetTokenUseCase();
  const sendResetPasswordEmailService = new SendResetPasswordEmailService();
  const controller = new RequestResetPasswordController(
    generateResetTokenUseCase,
    sendResetPasswordEmailService,
  );

  return controller;
};
