import { EmailNotificationRepository } from "../../repositories/email-notification/email-notification";
import { transporter } from "../../config/email";
import { EmailNotification, EmailStatus } from "../../types/email-notification";

export class EmailNotificationUseCase {
  constructor(
    private emailNotificationRepository: EmailNotificationRepository,
  ) {
    this.emailNotificationRepository = emailNotificationRepository;
  }

  async execute(createEmailNotificationParams: EmailNotification) {
    const htmlContent =
      createEmailNotificationParams.content ||
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 40px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.08); padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1a73e8; font-size: 28px; margin: 0;">Axel</h1>
          <p style="color: #555; font-size: 16px; margin-top: 8px;">Sua plataforma de confiança</p>
        </div>
        <h2 style="color: #333;">Confirmação de Pagamento</h2>
        <p style="color: #444; font-size: 16px; line-height: 1.6;">
          Olá! Obrigado por seu pagamento.<br>
          Você adquiriu o plano:
          <strong style="color: #1a73e8;">${createEmailNotificationParams.plan}</strong>.
        </p>
        <p style="color: #444; font-size: 16px; line-height: 1.6;">
          Caso tenha alguma dúvida ou precise de suporte, sinta-se à vontade para entrar em contato conosco.
        </p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #aaa; font-size: 12px;">
          Este é um e-mail automático. Por favor, não responda.
        </p>
        <div style="text-align: center; margin-top: 40px;">
          <p style="color: #ccc; font-size: 12px;">© 2025 Axel. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  `;
    const emailNotification = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: createEmailNotificationParams.recipient,
      subject: createEmailNotificationParams.subject,
      html: htmlContent,
    });

    const status =
      emailNotification.accepted.length > 0
        ? EmailStatus.SENT
        : EmailStatus.FAILED;

    const result = await this.emailNotificationRepository.execute({
      ...createEmailNotificationParams,
      status,
    });

    return result;
  }
}
