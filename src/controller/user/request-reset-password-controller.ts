import { GenerateResetTokenUseCase } from "../../use-cases/user/generate-reset-token";
import { SendResetPasswordEmailService } from "../../services/send-reset-password-email";
import { badRequest, ok, serverError } from "../helpers/http";
import { EmailStatus } from "../../types/email-notification";
import { Plan } from "@prisma/client";
import { HttpRequest } from "../../types/httpRequest";

export class RequestResetPasswordController {
  constructor(
    private generateResetTokenUseCase: GenerateResetTokenUseCase,
    private sendResetPasswordEmailService: SendResetPasswordEmailService,
  ) {
    this.generateResetTokenUseCase = generateResetTokenUseCase;
    this.sendResetPasswordEmailService = sendResetPasswordEmailService;
  }

  async execute(httpRequest: HttpRequest) {
    try {
      const { email } = httpRequest.body;

      if (!email) {
        return badRequest("O email é obrigatório");
      }

      const { token } = await this.generateResetTokenUseCase.execute(email);

      const result = await this.sendResetPasswordEmailService.execute(
        {
          recipient: email,
          subject: "Redefinição de senha",
          plan: Plan.FREE,
          id: "",
          content: "",
          status: EmailStatus.PENDING,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        token,
      );

      return ok(result);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
