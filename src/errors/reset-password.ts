export class ResetPasswordTokenNotFoundError extends Error {
  constructor() {
    super("Token de reset de senha não encontrado");
    this.name = "ResetPasswordTokenNotFoundError";
  }
}

export class ResetPasswordTokenExpiredError extends Error {
  constructor() {
    super("Token de reset de senha expirado");
    this.name = "ResetPasswordTokenExpiredError";
  }
}
