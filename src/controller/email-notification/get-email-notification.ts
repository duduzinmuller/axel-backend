import { EmailNotification } from "../../types/email-notification";
import { HttpRequest } from "../../types/httpRequest";
import { GetEmailNotificationUseCase } from "../../use-cases/email-notification/get-email-notification";
import { badRequest, ok, serverError } from "../helpers/http";

export class GetEmailNotificationController {
  constructor(
    private getEmailNotificationUseCase: GetEmailNotificationUseCase,
  ) {
    this.getEmailNotificationUseCase = getEmailNotificationUseCase;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const params = httpRequest.params;

      if (!params) {
        return badRequest("Erro ao buscar os emails");
      }

      const emailNotification = await this.getEmailNotificationUseCase.execute(
        params as EmailNotification,
      );

      return ok(emailNotification);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
