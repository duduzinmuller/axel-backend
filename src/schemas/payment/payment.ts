import { z } from "zod";
import { isValidCpf, removeCpfPunctuation } from "../../utils/cpf";

const addressSchema = z.object({
  zip_code: z.string().nonempty("CEP não informado"),
  street_name: z.string().nonempty("Rua não informada"),
  street_number: z.string().nonempty("Número não informado"),
  neighborhood: z.string().nonempty("Bairro não informado"),
  city: z.string().nonempty("Cidade não informada"),
  federal_unit: z.string().nonempty("Estado não informado"),
});

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
    currency: z.string().default("brl"),
    plan: z.string().nonempty("Plano não informado"),
    userId: z.string().nonempty("UserId não informado"),
    token: z.string().optional(),
    // Campos de endereço na raiz
    zip_code: z.string().optional(),
    street_name: z.string().optional(),
    street_number: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    federal_unit: z.string().optional(),
    // Estrutura payer.address
    payer: z
      .object({
        address: addressSchema,
      })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "bolbradesco") {
        // Verifica se os campos estão na raiz
        const hasRootAddress =
          !!data.zip_code &&
          !!data.street_name &&
          !!data.street_number &&
          !!data.neighborhood &&
          !!data.city &&
          !!data.federal_unit;

        // Verifica se os campos estão em payer.address
        const hasPayerAddress = !!data.payer?.address;

        return hasRootAddress || hasPayerAddress;
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
        "payer.address",
      ],
    },
  );
