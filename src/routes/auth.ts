import express, { Request, Response } from "express";
import { supabase } from "../config/supabase";
import prisma from "../../prisma/prisma";
import { TokensGeneratorAdapter } from "../adapters/token-generator";
import { generateRandomPassword } from "../utils/generate-password";

const authRouter = express.Router();

authRouter.get(
  "/login/:provider",
  async (req: Request, res: Response): Promise<void> => {
    const { provider } = req.params;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as any,
      options: {
        redirectTo: `${process.env.FRONT_END_APP_API}/callback`,
      },
    });

    if (error) {
      console.error("Erro ao iniciar autenticação:", error);
      res.status(400).send({ message: "Falha na autenticação" });
      return;
    }

    res.redirect(data.url);
    return;
  },
);

authRouter.get(
  "/callback",
  async (req: Request, res: Response): Promise<void> => {
    const { access_token } = req.query;

    if (!access_token) {
      console.error("Access token não fornecido");
      res.status(400).send({ message: "Access token não fornecido" });
      return;
    }

    const token =
      typeof access_token === "string"
        ? access_token
        : Array.isArray(access_token)
          ? access_token[0]
          : undefined;

    if (!token) {
      console.error("Access token em formato inválido");
      res.status(400).send({ message: "Access token em formato inválido" });
      return;
    }

    const { data, error } = await supabase.auth.getUser(token as string);

    if (error) {
      console.error("Erro ao obter usuário:", error);
      res
        .status(400)
        .send({ message: "Falha ao obter informações do usuário" });
      return;
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
        },
        create: {
          id: user.id,
          email: user.email ?? "",
          name,
          password: password,
          provider,
          providerId: user.id,
          image: avatarUrl,
        },
      });

      console.log("Usuário salvo no banco de dados:", savedUser);

      const tokensGenerator = new TokensGeneratorAdapter();
      const { accessToken, refreshToken } = tokensGenerator.execute(
        savedUser.id,
      );

      res.status(200).json({
        message: "Usuário autenticado com sucesso",
        user: {
          ...user,
          avatarUrl,
        },
        tokens: {
          accessToken,
          refreshToken,
        },
      });
    } catch (err) {
      console.error("Erro ao salvar usuário no banco de dados:", err);
      res.status(500).send({ message: "Erro interno ao salvar usuário" });
    }
  },
);

export default authRouter;
