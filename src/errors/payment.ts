export class PaymentError extends Error {
  constructor() {
    super("External ID is required to retrieve the payment intent.");
    this.name = "PaymentError";
  }
}
