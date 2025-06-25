import { supabase } from "../../config/supabase";
import prisma from "../../../prisma/prisma";
import { TokensGeneratorAdapter } from "../../adapters/token-generator";
import { generateRandomPassword } from "../../utils/generate-password";
import { badRequest, ok, serverError } from "../helpers/http";
import { HttpRequest } from "../../types/httpRequest";

export class OAuthCallbackController {
  async execute(httpRequest: HttpRequest) {
    const { access_token } = httpRequest.query;

    if (!access_token) {
      return badRequest("Access token não fornecido.");
    }

    const token =
      typeof access_token === "string"
        ? access_token
        : Array.isArray(access_token)
          ? access_token[0]
          : undefined;

    if (!token) {
      return badRequest("Access token em formato inválido.");
    }

    const { data, error } = await supabase.auth.getUser(token as string);

    if (error) {
      return badRequest("Falha ao obter informações do usuário.");
    }

    const user = data.user;
    try {
      const provider = user.app_metadata?.provider || "unknown";
      const [name = ""] = (user.user_metadata.full_name || "").split(" ");
      const avatarUrl =
        user.user_metadata.avatar_url || user.user_metadata.picture || "";

      const password = generateRandomPassword();
      const savedUser = await prisma.user.upsert({
        where: { email: user.email },
        update: {
          provider,
          providerId: user.id,
          isVerified: true,
        },
        create: {
          id: user.id,
          email: user.email ?? "",
          name,
          password: password,
          provider,
          providerId: user.id,
          image: avatarUrl,
          isVerified: true,
        },
      });
      const tokensGenerator = new TokensGeneratorAdapter();
      const { accessToken, refreshToken } = tokensGenerator.execute(
        savedUser.id,
      );

      return ok({
        message: "Usuário autenticado com sucesso",
        user: { ...user, avatarUrl },
        tokens: { accessToken, refreshToken },
      });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
