import { transporter } from "../config/email";
import { EmailNotificationRepository } from "../repositories/email-notification/email-notification";
import { EmailNotification, EmailStatus } from "../types/user";

export class SendResetPasswordEmailService {
  emailNotificationRepository: EmailNotificationRepository;

  constructor() {
    this.emailNotificationRepository = new EmailNotificationRepository();
  }

  async execute(
    createEmailNotificationParams: EmailNotification,
    token: string,
  ) {
    const resetLink = `${process.env.FRONT_END_APP_API}/reset-password?token=${token}`;

    const htmlContent = `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; padding: 40px; border-radius: 8px;">
      <h2 style="color: #333333;">Redefinição de Senha</h2>
      <p style="color: #555555; font-size: 16px;">
        Olá,<br><br>
        Recebemos uma solicitação para redefinir a senha da sua conta.
      </p>
      <p style="color: #555555; font-size: 16px;">
        Para criar uma nova senha, clique no botão abaixo:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetLink}" 
           style="background-color: #1a73e8; color: #ffffff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block;">
          Redefinir Senha
        </a>
      </div>
      <p style="color: #555555; font-size: 14px;">
        Ou, se preferir, copie e cole o seguinte link no seu navegador:
        <br>
        <a href="${resetLink}" style="color: #1a73e8; word-break: break-all;">${resetLink}</a>
      </p>
      <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
      <p style="color: #999999; font-size: 12px;">
        Se você não solicitou essa alteração, por favor ignore este e-mail.
      </p>
    </div>
  </div>
`;

    console.log(
      "Enviando email para:",
      createEmailNotificationParams.recipient,
    );

    let status = EmailStatus.FAILED;

    const emailNotification = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: createEmailNotificationParams.recipient,
      subject: createEmailNotificationParams.subject,
      html: htmlContent,
    });

    status =
      emailNotification.accepted.length > 0
        ? EmailStatus.SENT
        : EmailStatus.FAILED;

    const result = await this.emailNotificationRepository.execute({
      ...createEmailNotificationParams,
      content: htmlContent,
      recipient: createEmailNotificationParams.recipient,
      status,
    });

    return result;
  }
}
