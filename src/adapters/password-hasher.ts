import bcrypt from "bcrypt";

export class PasswordHasherAdapter {
  async execute(password: string): Promise<string> {
    if (!password) {
      throw new Error("Password is required to hash");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
}
