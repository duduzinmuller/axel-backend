import { InstagramService } from "./instagram-service";
import { FacebookService } from "./facebook-service";
import { YouTubeService } from "./youtube-service";
import { TikTokService } from "./tiktok-service";
import { KwaiService } from "./kwai-service";
import type {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export type Platform = "instagram" | "facebook" | "youtube" | "tiktok" | "kwai";

export interface MultiPlatformCredentials {
  instagram?: SocialMediaCredentials;
  facebook?: SocialMediaCredentials;
  youtube?: SocialMediaCredentials;
  tiktok?: SocialMediaCredentials;
  kwai?: SocialMediaCredentials;
}

export interface MultiPlatformPostRequest {
  content: PostContent;
  platforms: Platform[];
  credentials: MultiPlatformCredentials;
}

export interface MultiPlatformPostResult {
  success: boolean;
  results: Record<Platform, PostResult>;
  totalPlatforms: number;
  successfulPosts: number;
  failedPosts: number;
}

export class SocialMediaManager {
  private services: Map<Platform, BaseSocialService> = new Map();

  constructor(credentials: MultiPlatformCredentials) {
    this.initializeServices(credentials);
  }

  private initializeServices(credentials: MultiPlatformCredentials): void {
    if (credentials.instagram) {
      this.services.set(
        "instagram",
        new InstagramService(credentials.instagram),
      );
    }

    if (credentials.facebook) {
      this.services.set("facebook", new FacebookService(credentials.facebook));
    }

    if (credentials.youtube) {
      this.services.set("youtube", new YouTubeService(credentials.youtube));
    }

    if (credentials.tiktok) {
      this.services.set("tiktok", new TikTokService(credentials.tiktok));
    }

    if (credentials.kwai) {
      this.services.set("kwai", new KwaiService(credentials.kwai));
    }
  }

  async postToMultiplePlatforms(
    request: MultiPlatformPostRequest,
  ): Promise<MultiPlatformPostResult> {
    const results: Record<Platform, PostResult> = {} as Record<
      Platform,
      PostResult
    >;

    const unavailablePlatforms = request.platforms.filter(
      (platform) => !this.services.has(platform),
    );

    if (unavailablePlatforms.length > 0) {
      throw new Error(
        `Plataformas não configuradas: ${unavailablePlatforms.join(", ")}`,
      );
    }

    const postPromises = request.platforms.map(async (platform) => {
      const service = this.services.get(platform)!;

      try {
        const result = await service.post(request.content);
        results[platform] = result;
      } catch (error: any) {
        results[platform] = {
          success: false,
          error: error.message,
          platform,
        };
      }
    });

    await Promise.all(postPromises);

    // Calcular estatísticas
    const successfulPosts = Object.values(results).filter(
      (result) => result.success,
    ).length;
    const failedPosts = Object.values(results).filter(
      (result) => !result.success,
    ).length;

    return {
      success: successfulPosts > 0,
      results,
      totalPlatforms: request.platforms.length,
      successfulPosts,
      failedPosts,
    };
  }

  async validateAllCredentials(): Promise<Record<Platform, boolean>> {
    const validationResults: Record<Platform, boolean> = {} as Record<
      Platform,
      boolean
    >;

    const validationPromises = Array.from(this.services.entries()).map(
      async ([platform, service]) => {
        try {
          const isValid = await service.validateCredentials();
          validationResults[platform] = isValid;
        } catch {
          validationResults[platform] = false;
        }
      },
    );

    await Promise.all(validationPromises);

    return validationResults;
  }

  async refreshAllTokens(): Promise<
    Record<Platform, SocialMediaCredentials | null>
  > {
    const refreshResults: Record<Platform, SocialMediaCredentials | null> =
      {} as Record<Platform, SocialMediaCredentials | null>;

    const refreshPromises = Array.from(this.services.entries()).map(
      async ([platform, service]) => {
        try {
          const newCredentials = await service.refreshAccessToken();
          refreshResults[platform] = newCredentials;
        } catch {
          refreshResults[platform] = null;
        }
      },
    );

    await Promise.all(refreshPromises);

    return refreshResults;
  }

  getAvailablePlatforms(): Platform[] {
    return Array.from(this.services.keys());
  }

  addPlatform(platform: Platform, credentials: SocialMediaCredentials): void {
    switch (platform) {
      case "instagram":
        this.services.set(platform, new InstagramService(credentials));
        break;
      case "facebook":
        this.services.set(platform, new FacebookService(credentials));
        break;
      case "youtube":
        this.services.set(platform, new YouTubeService(credentials));
        break;
      case "tiktok":
        this.services.set(platform, new TikTokService(credentials));
        break;
      case "kwai":
        this.services.set(platform, new KwaiService(credentials));
        break;
    }
  }

  removePlatform(platform: Platform): void {
    this.services.delete(platform);
  }
}
