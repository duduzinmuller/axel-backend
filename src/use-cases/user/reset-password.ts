import { GetUserByResetTokenRepository } from "../../repositories/user/get-by-reset-token-user";
import { UpdateUserPasswordRepository } from "../../repositories/user/update-password-user";
import { PasswordHasherAdapter } from "../../adapters/password-hasher";
import {
  ResetPasswordTokenExpiredError,
  ResetPasswordTokenNotFoundError,
} from "../../errors/reset-password";
import { ResetPasswordParams } from "../../types/reset-password";
export class ResetPasswordUseCase {
  getUserByResetTokenRepository: GetUserByResetTokenRepository;
  updateUserPasswordRepository: UpdateUserPasswordRepository;
  passwordHasherAdapter: PasswordHasherAdapter;

  constructor(
    getUserByResetTokenRepository: GetUserByResetTokenRepository,
    updateUserPasswordRepository: UpdateUserPasswordRepository,
    passwordHasherAdapter: PasswordHasherAdapter,
  ) {
    this.getUserByResetTokenRepository = getUserByResetTokenRepository;
    this.updateUserPasswordRepository = updateUserPasswordRepository;
    this.passwordHasherAdapter = passwordHasherAdapter;
  }

  async execute({ token, newPassword }: ResetPasswordParams) {
    const user = await this.getUserByResetTokenRepository.execute(token);

    if (!user) {
      throw new ResetPasswordTokenNotFoundError();
    }

    if (
      user.resetPasswordTokenExpires &&
      user.resetPasswordTokenExpires < new Date()
    ) {
      throw new ResetPasswordTokenExpiredError();
    }

    const hashedPassword =
      await this.passwordHasherAdapter.execute(newPassword);

    const updatedUser = await this.updateUserPasswordRepository.execute({
      id: user.id,
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordTokenExpires: null,
    });

    return updatedUser;
  }
}
