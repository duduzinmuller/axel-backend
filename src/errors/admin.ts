export class AdminUnauthorizedError extends Error {
  constructor(message = "Apenas administradores podem realizar esta ação.") {
    super(message);
    this.name = "AdminUnauthorizedError";
  }
}
export class CannotEditOtherAdminsError extends Error {
  constructor(message = "Não é possível editar outros administradores") {
    super(message);
    this.name = "CannotEditOtherAdminsError";
  }
}
export class CannotDeleteOtherAdminsError extends Error {
  constructor(message = "Não é possível deletar outros administradores") {
    super(message);
    this.name = "CannotDeleteOtherAdminsError";
  }
}

export class CannotDeleteOwnAccountError extends Error {
  constructor(message = "Não é possível deletar sua própria conta") {
    super(message);
    this.name = "CannotDeleteOwnAccountError";
  }
}
