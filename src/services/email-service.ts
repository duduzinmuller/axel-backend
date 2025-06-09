import "dotenv/config";
import nodemailer from "nodemailer";

export const sendVerificationEmail = async (
  email: string,
  code: string,
): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Axel - Assistente Virtual" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Seu Código de Verificação - Axel",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <h1 style="color: #1a73e8; text-align: center; font-size: 28px; margin-bottom: 10px;">Axel - Assistente Virtual</h1>
          <h2 style="color: #333333; text-align: center; font-size: 20px;">Código de Verificação</h2>
          <p style="text-align: center; color: #555; font-size: 16px; margin-top: 20px;">
            Use o código abaixo para verificar sua conta:
          </p>
          <div style="text-align: center; font-size: 28px; font-weight: bold; margin: 30px 0; color: #1a1a1a; letter-spacing: 2px;">
            ${code}
          </div>
          <p style="text-align: center; color: #777; font-size: 14px;">
            Este código expira em 15 minutos.
          </p>
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;">
          <p style="text-align: center; font-size: 12px; color: #aaa;">
            Este e-mail foi enviado automaticamente por <strong>Axel - Assistente Virtual</strong>.<br>
            Se você não solicitou este código, por favor ignore esta mensagem.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
