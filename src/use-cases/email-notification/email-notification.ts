import { EmailNotificationRepository } from "../../repositories/email-notification/email-notification";
import { transporter } from "../../config/email";
import { EmailNotification, EmailStatus } from "../../types/email-notification";

export class EmailNotificationUseCase {
  constructor(
    private emailNotificationRepository: EmailNotificationRepository,
  ) {
    this.emailNotificationRepository = new EmailNotificationRepository();
  }

  async execute(createEmailNotificationParams: EmailNotification) {
    const htmlContent = `
    <html>
      <body style="margin: 0; padding: 0; background-color: #121212; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff;">
        <div style="max-width: 600px; margin: auto; padding: 40px 30px; background-color: #1e1e1e; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
          <header style="text-align: center; margin-bottom: 40px;">
            <h1 style="margin: 0; color: #00d8ff;">Brender</h1>
            <p style="font-size: 14px; color: #cccccc;">Tecnologia para transformar sua experiência</p>
          </header>
  
          <section>
            <h2 style="color: #ffffff;">Confirmação de Pagamento</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Olá! Obrigado por seu pagamento. Você adquiriu o plano:
              <strong style="color: #00d8ff;">${createEmailNotificationParams.plan}</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.6;">
              Caso tenha alguma dúvida ou precise de suporte, sinta-se à vontade para entrar em contato conosco.
            </p>
          </section>
  
          <footer style="margin-top: 40px; border-top: 1px solid #333; padding-top: 20px; text-align: center; color: #888;">
            <p style="margin: 0;">Atenciosamente,</p>
            <p style="margin: 5px 0 0 0;">Equipe Brender</p>
          </footer>
        </div>
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
