import "dotenv/config";
import { stripe } from "../../config/stripe";
import { badRequest, ok, serverError } from "../helpers/http";
import { CreatePaymentUseCase } from "../../use-cases/payment/create-payment";

export class StripeWebhookController {
  createPaymentUseCase: CreatePaymentUseCase;

  constructor(createPaymentUseCase: CreatePaymentUseCase) {
    this.createPaymentUseCase = createPaymentUseCase;
  }

  async handleWebhook(httpRequest: any) {
    const sig = httpRequest.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig) {
      return badRequest("Missing Stripe signature");
    }

    if (!endpointSecret) {
      console.error("Stripe webhook secret is not set");
      return serverError();
    }

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        httpRequest.body,
        sig,
        endpointSecret,
      );
    } catch (err: any) {
      console.error(`Webhook Error: ${err.message}`);
      return badRequest(err.message);
    }

    try {
      await this.processEvent(event);
      return ok({ received: true });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }

  async processEvent(event: any) {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        await this.createPaymentUseCase.execute(paymentIntent.id);
        break;
      case "payment_intent.payment_failed":
        const failedPaymentIntent = event.data.object;
        await this.createPaymentUseCase.execute(failedPaymentIntent.id);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
