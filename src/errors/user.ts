export class EmailAlreadyInUseError extends Error {
  constructor(email: any) {
    super(`O email ${email} ja esta em uso`);
    this.name = "EmailAlreadyInUseError";
  }
}
