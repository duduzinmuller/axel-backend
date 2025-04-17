import { z } from "zod";

export const CreateEmailVerificationSchema = z.object({
  email: z
    .string({
      required_error: "O email é obrigatório",
    })
    .email({
      message: "O email é inválido",
    })
    .trim(),
  userId: z.string({
    required_error: "O userId é obrigatório",
  }),
  contactId: z
    .string({
      required_error: "O contactId é obrigatório",
    })
    .trim()
    .toLowerCase(),
});
