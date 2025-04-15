import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .trim()
    .min(1, {
      message: "O nome é obrigatório",
    }),
  email: z
    .string({
      required_error: "O email é obrigatório",
    })
    .email({
      message: "O email é inválido",
    })
    .trim()
    .min(1, {
      message: "O email é obrigatório",
    }),
  password: z
    .string({
      required_error: "A senha é obrigatória",
    })
    .min(6, {
      message: "A senha deve ter no mínimo 6 caracteres",
    }),
  providerId: z
    .string({
      required_error: "O providerId é obrigatório",
    })
    .trim()
    .min(1, {
      message: "O providerId é obrigatório",
    }),
});

export const updateUserSchema = CreateUserSchema.omit({
  providerId: true,
})
  .partial()
  .strict({
    message: "Os campos não podem ser adicionados",
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "O email é inválido",
    })
    .trim()
    .min(1, {
      message: "O email é obrigatório",
    }),
  password: z.string().trim().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  }),
});
