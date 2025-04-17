export class AccessCodeNotFoundError extends Error {
  constructor() {
    super("Codigo não encontrado");
    this.name = "AccessCodeNotFoundError";
  }
}

export class AccessCodeExpiredError extends Error {
  constructor() {
    super("Esse codigo expirou");
    this.name = "AccessCodeExpiredError";
  }
}

export class AccessCodeAlreadyUsedError extends Error {
  constructor() {
    super("Esse codigo já foi usado");
    this.name = "AccessCodeAlreadyUsedError";
  }
}
