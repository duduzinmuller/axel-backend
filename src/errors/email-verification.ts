export class EmailVerificationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailVerificationError";
  }
}

export class EmailVerificationNotFoundError extends EmailVerificationError {
  constructor() {
    super("Codigo de verificação não encontrado");
    this.name = "EmailVerificationNotFoundError";
  }
}

export class EmailVerificationExpiredError extends EmailVerificationError {
  constructor() {
    super("Esse código de verificação expirou");
    this.name = "EmailVerificationExpiredError";
  }
}

export class EmailVerificationInvalidError extends EmailVerificationError {
  constructor() {
    super("Código de verificação inválido");
    this.name = "EmailVerificationInvalidError";
  }
}
