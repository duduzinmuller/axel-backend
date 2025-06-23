export class PaymentError extends Error {
  constructor() {
    super("External ID is required to retrieve the payment intent.");
    this.name = "PaymentError";
  }
}

export class PaymentIdError extends Error {
  constructor() {
    super("Pagamento não encontrado");
    this.name = "PaymentIdError";
  }
}
