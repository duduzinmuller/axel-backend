import { transporter } from "../config/email";
import { EmailNotificationRepository } from "../repositories/email-notification/email-notification";
import { EmailNotification, EmailStatus } from "../types/email-notification";

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
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 40px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.08); padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1a73e8; font-size: 28px; margin: 0;">Axel</h1>
          <p style="color: #555; font-size: 16px; margin-top: 8px;">Sua plataforma de confiança</p>
        </div>
        <h2 style="color: #333;">Redefinição de Senha</h2>
        <p style="color: #444; font-size: 16px;">
          Olá,<br><br>
          Recebemos uma solicitação para redefinir a senha da sua conta na <strong>Axel</strong>.
        </p>
        <p style="color: #444; font-size: 16px;">
          Para continuar, clique no botão abaixo:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" 
             style="background-color: #1a73e8; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; font-size: 16px;">
            Redefinir Senha
          </a>
        </div>
        <p style="color: #777; font-size: 14px;">
          Se preferir, copie e cole este link no seu navegador:
          <br>
          <a href="${resetLink}" style="color: #1a73e8; word-break: break-word;">${resetLink}</a>
        </p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #aaa; font-size: 12px;">
          Se você não solicitou essa alteração, ignore este e-mail.
        </p>
        <div style="text-align: center; margin-top: 40px;">
          <p style="color: #ccc; font-size: 12px;">© 2025 Axel. Todos os direitos reservados.</p>
        </div>
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
