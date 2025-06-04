import type { Request, Response } from "express";
import {
  SocialMediaManager,
  type Platform,
} from "../../services/social-media/social-media-manager";
import {
  getUserCredentials,
  saveUserCredentials,
} from "../../repositories/social-media/user-credentias";

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

      const userCredentials: any = await getUserCredentials(userId);

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
        userId: filteredCredentials,
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
}
