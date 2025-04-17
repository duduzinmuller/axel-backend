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
    from: `"Brender - Assistente Virtual" <process.env.EMAIL_USER}>`,
    to: email,
    subject: "Seu Código de Verificação - Brender",
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
        <h1 style="color: #4CAF50;">Brender - Assistente Virtual</h1>
        <h2 style="color: #333;">Seu Código de Verificação</h2>
        <p>Use o código abaixo para verificar sua conta:</p>
        <div style="font-size: 24px; font-weight: bold; margin: 20px 0; color: #333;">
          ${code}
        </div>
        <p style="color: #888;">Este código expira em 15 minutos.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #aaa;">Este e-mail foi enviado por Brender - Assistente Virtual. Se você não solicitou este código, por favor ignore este e-mail.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
