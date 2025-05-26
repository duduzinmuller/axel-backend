import { ok, serverError } from "../helpers/http";
import prisma from "../../../prisma/prisma";

export class MercadoPagoWebhookController {
  async handleWebhook(httpRequest: any) {
    try {
      const event = httpRequest.body;

      if (
        event.type === "payment" &&
        event.data?.id &&
        (event.action === "payment.created" ||
          event.action === "payment.updated")
      ) {
        const paymentId = String(event.data.id);

        const paymentRecord = await prisma.payment.findFirst({
          where: { externalId: paymentId },
        });

        if (paymentRecord && paymentRecord.userId && paymentRecord.plan) {
          await prisma.user.update({
            where: { id: paymentRecord.userId },
            data: { plan: paymentRecord.plan },
          });
        }
      }

      return ok({ received: true });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
