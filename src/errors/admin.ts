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
