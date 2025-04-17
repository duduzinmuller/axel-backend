export class AccessCodeNotFoundError extends Error {
  constructor() {
    super("Codigo não encontrado");
  }
}

export class AccessCodeExpiredError extends Error {
  constructor() {
    super("Esse codigo expirou");
  }
}
