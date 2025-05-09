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
});

export const updateUserSchema = CreateUserSchema.extend({
  image: z
    .string()
    .url({
      message: "A URL da imagem é inválida",
    })
    .optional(),
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

export const refreshTokenSchema = z.object({
  refreshToken: z.string().trim().min(1, {
    message: "O token de refresh é obrigatório",
  }),
});
