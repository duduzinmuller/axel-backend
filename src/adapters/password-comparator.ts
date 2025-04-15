import bcrypt from "bcrypt";

export class PasswordComparatorAdapter {
  async execute(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
