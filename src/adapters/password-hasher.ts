import bcrypt from "bcrypt";

export class PasswordHasherAdapter {
  execute(password: string) {
    return bcrypt.hash(password, 10);
  }
}
