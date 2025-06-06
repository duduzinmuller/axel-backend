import { CreateUserRepository } from "../../repositories/user/create-user";
import { User } from "../../types/user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { EmailAlreadyInUseError } from "../../errors/user";
import { IdGeneratorAdapter } from "../../adapters/id-generator";
import { PasswordHasherAdapter } from "../../adapters/password-hasher";

import { TokensGeneratorAdapter } from "../../adapters/token-generator";
import { imageUrl } from "../../utils/image";

export class CreateUserUseCase {
  createUserRepository: CreateUserRepository;
  getUserByEmailRepository: GetUserByEmailRepository;
  idGeneratorAdapter: IdGeneratorAdapter;
  passwordHasherAdapter: PasswordHasherAdapter;
  tokensGeneratorAdapter: TokensGeneratorAdapter;

  constructor(
    createUserRepository: CreateUserRepository,
    getUserByEmailRepository: GetUserByEmailRepository,
    idGeneratorAdapter: IdGeneratorAdapter,
    passwordHasherAdapter: PasswordHasherAdapter,
    tokensGeneratorAdapter: TokensGeneratorAdapter,
  ) {
    this.createUserRepository = createUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.idGeneratorAdapter = idGeneratorAdapter;
    this.passwordHasherAdapter = passwordHasherAdapter;
    this.tokensGeneratorAdapter = tokensGeneratorAdapter;
  }
  async execute(createUserParams: User) {
    const withProviderEmail = await this.getUserByEmailRepository.execute(
      createUserParams.email,
    );

    if (withProviderEmail) {
      throw new EmailAlreadyInUseError(createUserParams.email);
    }

    const userId = this.idGeneratorAdapter.execute();

    const hashedPassword = await this.passwordHasherAdapter.execute(
      createUserParams.password,
    );

    const { id, ...restParams } = createUserParams;

    const user = {
      id: userId,
      image: typeof imageUrl === "function" ? imageUrl() : imageUrl,
      ...restParams,
      password: hashedPassword,
    };

    const result = await this.createUserRepository.execute(user);

    return {
      ...result,
      tokens: this.tokensGeneratorAdapter.execute(userId),
    };
  }
}
