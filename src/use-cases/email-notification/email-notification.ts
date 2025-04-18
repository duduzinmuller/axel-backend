import { EmailNotificationRepository } from "../../repositories/email-notification/email-notification";
import { transporter } from "../../config/email";
import { EmailNotification, EmailStatus } from "../../types/user";

export class EmailNotificationUseCase {
  emailNotificationRepository: EmailNotificationRepository;

  constructor() {
    this.emailNotificationRepository = new EmailNotificationRepository();
  }

  async execute(createEmailNotificationParams: EmailNotification) {
    const htmlContent = `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h1 style="color: #333;">Confirmação de Pagamento</h1>
                    <p>Obrigado por seu pagamento. Você adquiriu o plano: <strong>${createEmailNotificationParams.plan}</strong>.</p>
                    <p>Se você tiver alguma dúvida, entre em contato conosco.</p>
                    <footer style="margin-top: 20px; color: #777;">
                        <p>Atenciosamente,</p>
                        <p>Sua Empresa</p>
                    </footer>
                </body>
            </html>
        `;

    console.log(
      "Parâmetros de Notificação de E-mail:",
      createEmailNotificationParams,
    );
    console.log("Destinatário:", createEmailNotificationParams.recipient);

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
