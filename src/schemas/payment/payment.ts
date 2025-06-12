import { z } from "zod";
import { isValidCpf, removeCpfPunctuation } from "../../utils/cpf";

export const paymentSchema = z
  .object({
    cpf: z
      .string()
      .nonempty("CPF não informado")
      .refine((val) => isValidCpf(removeCpfPunctuation(val)), {
        message: "CPF inválido",
      }),
    name: z.string().nonempty("Nome não informado"),
    recipient: z.string().email("Email do destinatário inválido"),
    paymentMethod: z.enum(["bolbradesco", "visa", "master", "amex", "pix"]),
    amount: z.number().positive("O valor deve ser positivo"),
    plan: z.string().nonempty("Plano não informado"),
    userId: z.string().nonempty("UserId não informado"),
    token: z.string().optional(),
    zip_code: z.string().optional(),
    street_name: z.string().optional(),
    street_number: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    federal_unit: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "bolbradesco") {
        return (
          !!data.zip_code &&
          !!data.street_name &&
          !!data.street_number &&
          !!data.neighborhood &&
          !!data.city &&
          !!data.federal_unit
        );
      }
      return true;
    },
    {
      message: "Campos de endereço obrigatórios para pagamento bolbradesco",
      path: [
        "zip_code",
        "street_name",
        "street_number",
        "neighborhood",
        "city",
        "federal_unit",
      ],
    },
  );
