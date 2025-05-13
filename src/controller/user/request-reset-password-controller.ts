import { GenerateResetTokenUseCase } from "../../use-cases/user/generate-reset-token";
import { SendResetPasswordEmailService } from "../../services/send-reset-password-email";
import { badRequest, ok, serverError } from "../helpers/http";
import { Plan } from "@prisma/client";
import { EmailStatus } from "../../types/user";

export class RequestResetPasswordController {
  constructor(
    private generateResetTokenUseCase: GenerateResetTokenUseCase,
    private sendResetPasswordEmailService: SendResetPasswordEmailService,
  ) {}

  async execute(httpRequest: any) {
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
