import { PasswordHasherAdapter } from "../../adapters/password-hasher";
import { EmailAlreadyInUseError } from "../../errors/user";
import { GetUserByEmailRepository } from "../../repositories/user/get-by-email-user";
import { UpdateUserRepository } from "../../repositories/user/update-user";
import { UpdateUserData } from "../../types/user";

export class UpdateUserUseCase {
  constructor(
    private getUserByEmailRepository: GetUserByEmailRepository,
    private updateUserRepository: UpdateUserRepository,
    private passwordHasherAdapter: PasswordHasherAdapter,
  ) {
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.updateUserRepository = updateUserRepository;
    this.passwordHasherAdapter = passwordHasherAdapter;
  }
  async execute(userId: string, updateUserParams: UpdateUserData) {
    if (updateUserParams.email) {
      const userWithProviderEmail = await this.getUserByEmailRepository.execute(
        updateUserParams.email,
      );

      if (userWithProviderEmail && userWithProviderEmail.id !== userId) {
        throw new EmailAlreadyInUseError(updateUserParams.email);
      }
    }

    const user = { ...updateUserParams };

    if (updateUserParams.password) {
      const hashedPassword = await this.passwordHasherAdapter.execute(
        updateUserParams.password,
      );
      user.password = hashedPassword;
    }

    const result = await this.updateUserRepository.execute(userId, user);

    return result;
  }
}
