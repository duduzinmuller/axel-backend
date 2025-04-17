import z from "zod";

export const CreateAccessCodeSchema = () =>
  z.object({
    plan: z.enum(["MONTHLY", "ANNUAL"], {
      required_error: "O plano é obrigatório",
      invalid_type_error: "Plano inválido. Deve ser 'MONTHLY' ou 'ANNUAL'.",
    }),
    expiresAt: z
      .string({
        required_error: "A data de expiração é obrigatória",
      })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "A data de expiração deve ser uma data válida",
      }),
  });
