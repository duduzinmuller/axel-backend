import { PasswordComparatorAdapter } from "../../adapters/password-comparator";
import { TokensGeneratorAdapter } from "../../adapters/token-generator";
import { InvalidPasswordError, UserNotFoundError } from "../../errors/user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";

export class LoginUserUseCase {
  getUserByEmailRepository: GetUserByEmailRepository;
  passwordComparatorAdapter: PasswordComparatorAdapter;
  tokensGeneratorAdapter: TokensGeneratorAdapter;

  constructor(
    getUserByEmailRepository: GetUserByEmailRepository,
    passwordComparatorAdapter: PasswordComparatorAdapter,
    tokensGeneratorAdapter: TokensGeneratorAdapter,
  ) {
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.passwordComparatorAdapter = passwordComparatorAdapter;
    this.tokensGeneratorAdapter = tokensGeneratorAdapter;
  }

  async execute(email: string, password: string) {
    const user = await this.getUserByEmailRepository.execute(email);

    if (!user) {
      throw new UserNotFoundError("Usuario não encontrado");
    }

    const isPasswordValid = await this.passwordComparatorAdapter.execute(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new InvalidPasswordError();
    }

    return {
      ...user,
      tokens: this.tokensGeneratorAdapter.execute(user.id),
    };
  }
}
