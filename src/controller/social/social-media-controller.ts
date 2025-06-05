import type { Request, Response } from "express";
import {
  SocialMediaManager,
  type Platform,
} from "../../services/social-media/social-media-manager";
import {
  getUserCredentials,
  saveUserCredentials,
} from "../../repositories/social-media/user-credentias";
import fetch from "node-fetch";

export class SocialMediaController {
  async postToMultiplePlatforms(req: Request, res: Response): Promise<void> {
    try {
      const { content, platforms, userId } = req.body as {
        content: {
          text: string;
          mediaUrl?: string;
          mediaType?: "image" | "video";
          hashtags?: string[];
        };
        platforms: Platform[];
        userId: string;
      };

      const userCredentials = await getUserCredentials(userId);

      const filteredCredentials: any = Object.fromEntries(
        platforms
          .filter((platform) => userCredentials[platform])
          .map((platform) => [platform, userCredentials[platform]]),
      );

      if (Object.keys(filteredCredentials).length === 0) {
        res.status(400).json({
          success: false,
          error: "Nenhuma plataforma configurada para este usuário",
        });
        return;
      }

      const manager = new SocialMediaManager(filteredCredentials);

      const result = await manager.postToMultiplePlatforms({
        content,
        platforms,
        userId,
      });

      res.json({
        success: result.success,
        data: result,
        message: `${result.successfulPosts} de ${result.totalPlatforms} posts foram publicados com sucesso`,
      });
    } catch (error: any) {
      console.error("Erro ao postar nas redes sociais:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async validateCredentials(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const userCredentials: any = await getUserCredentials(userId);
      const manager = new SocialMediaManager(userCredentials);

      const validationResults = await manager.validateAllCredentials();

      res.json({
        success: true,
        data: validationResults,
      });
    } catch (error: any) {
      console.error("Erro ao validar credenciais:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async refreshTokens(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const userCredentials: any = await getUserCredentials(userId);
      const manager = new SocialMediaManager(userCredentials);

      const refreshResults = await manager.refreshAllTokens();

      for (const [platform, credentials] of Object.entries(refreshResults)) {
        if (credentials) {
          await saveUserCredentials(userId, platform as Platform, credentials);
        }
      }

      res.json({
        success: true,
        data: refreshResults,
        message: "Tokens renovados com sucesso",
      });
    } catch (error: any) {
      console.error("Erro ao renovar tokens:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async getConnectedPlatforms(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const userCredentials: any = await getUserCredentials(userId);
      const manager = new SocialMediaManager(userCredentials);

      const availablePlatforms = manager.getAvailablePlatforms();

      res.json({
        success: true,
        data: {
          connectedPlatforms: availablePlatforms,
          totalConnected: availablePlatforms.length,
        },
      });
    } catch (error: any) {
      console.error("Erro ao buscar plataformas conectadas:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async connectToPlatform(req: Request, res: Response): Promise<void> {
    try {
      const { platform, userId } = req.params;
      let authUrl = "";

      const redirectUri = encodeURIComponent(
        `https://seusite.com/callback/${platform}`,
      );

      switch (platform) {
        case "tiktok":
          authUrl = `https://www.tiktok.com/v2/auth/authorize/?client_key=${process.env.TIKTOK_CLIENT_KEY}&response_type=code&scope=user.info.basic,video.upload&redirect_uri=${redirectUri}&state=${userId}`;
          break;
        case "kwai":
          authUrl = `https://open.kwai.com/oauth/authorize?client_id=${process.env.KWAI_CLIENT_ID}&response_type=code&scope=user_info+video_upload&redirect_uri=${redirectUri}&state=${userId}`;
          break;
        case "instagram":
          authUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code&state=${userId}`;
          break;
        case "youtube":
          authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.YOUTUBE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/youtube.upload&access_type=offline&state=${userId}`;
          break;
        default:
          res.status(400).json({
            success: false,
            error: "Plataforma não suportada",
          });
          return;
      }

      res.json({
        success: true,
        authUrl,
      });
    } catch (error: any) {
      console.error("Erro ao gerar URL de conexão:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async handleCallback(req: Request, res: Response): Promise<void> {
    try {
      const { code, state } = req.query;
      const { platform } = req.params;
      const userId = state as string;

      if (!code) {
        res.status(400).json({
          success: false,
          error: "Code não fornecido",
        });
        return;
      }

      let tokenUrl = "";
      let body: any = {};
      let headers: any = {
        "Content-Type": "application/json",
      };

      const redirectUri = `https://seusite.com/callback/${platform}`;

      switch (platform) {
        case "tiktok":
          tokenUrl = "https://open.tiktokapis.com/v2/oauth/token/";
          body = new URLSearchParams({
            client_key: process.env.TIKTOK_CLIENT_KEY!,
            client_secret: process.env.TIKTOK_CLIENT_SECRET!,
            grant_type: "authorization_code",
            code: code as string,
            redirect_uri: redirectUri,
          });
          headers["Content-Type"] = "application/x-www-form-urlencoded";
          break;

        case "kwai":
          tokenUrl = "https://open.kwai.com/oauth/token";
          body = {
            client_id: process.env.KWAI_CLIENT_ID!,
            client_secret: process.env.KWAI_CLIENT_SECRET!,
            grant_type: "authorization_code",
            code: code as string,
            redirect_uri: redirectUri,
          };
          break;

        case "instagram":
          tokenUrl = "https://api.instagram.com/oauth/access_token";
          body = {
            client_id: process.env.INSTAGRAM_CLIENT_ID!,
            client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
            grant_type: "authorization_code",
            code: code as string,
            redirect_uri: redirectUri,
          };
          break;

        case "youtube":
          tokenUrl = "https://oauth2.googleapis.com/token";
          body = {
            client_id: process.env.YOUTUBE_CLIENT_ID!,
            client_secret: process.env.YOUTUBE_CLIENT_SECRET!,
            grant_type: "authorization_code",
            code: code as string,
            redirect_uri: redirectUri,
          };
          break;

        default:
          res.status(400).json({
            success: false,
            error: "Plataforma não suportada",
          });
          return;
      }

      const response = await fetch(tokenUrl, {
        method: "POST",
        headers,
        body:
          headers["Content-Type"] === "application/x-www-form-urlencoded"
            ? body
            : JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error_description || JSON.stringify(data));
      }

      await saveUserCredentials(userId, platform as Platform, data);

      res.json({
        success: true,
        message: "Conta conectada com sucesso",
        credentials: data,
      });
    } catch (error: any) {
      console.error("Erro no callback OAuth:", error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
