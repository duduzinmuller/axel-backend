import { InstagramService } from "./instagram-service";
import { FacebookService } from "./facebook-service";
import { YouTubeService } from "./youtube-service";
import { TikTokService } from "./tiktok-service";
import { KwaiService } from "./kwai-service";
import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";
import {
  CreatePostData,
  createPost,
  updatePostStatus,
  createPostLog,
} from "../../repositories/social-media/post-repository";
import {
  getUserCredentials,
  updateCredentialTokens,
} from "../../repositories/social-media/user-credentias";

export type Platform = "instagram" | "facebook" | "youtube" | "tiktok" | "kwai";

export interface MultiPlatformPostRequest {
  userId: string;
  content: PostContent;
  platforms: Platform[];
  scheduledAt?: Date;
}

export interface MultiPlatformPostResult {
  success: boolean;
  postId: string;
  results: Record<Platform, PostResult>;
  totalPlatforms: number;
  successfulPosts: number;
  failedPosts: number;
}

export class SocialMediaManager {
  private services: Map<Platform, BaseSocialService> = new Map();

  constructor(private userId: string) {}

  async initializeServices(): Promise<void> {
    const credentials = await getUserCredentials(this.userId);

    this.services.clear();

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
    await this.initializeServices();

    const postData: CreatePostData = {
      userId: request.userId,
      content: request.content.text,
      mediaUrl: request.content.mediaUrl,
      mediaType: request.content.mediaType,
      hashtags: request.content.hashtags,
      platforms: request.platforms,
      scheduledAt: request.scheduledAt,
    };

    const post = await createPost(postData);

    if (request.scheduledAt && request.scheduledAt > new Date()) {
      return {
        success: true,
        postId: post.id,
        results: {} as Record<Platform, PostResult>,
        totalPlatforms: request.platforms.length,
        successfulPosts: 0,
        failedPosts: 0,
      };
    }

    const results: Record<Platform, PostResult> = {} as Record<
      Platform,
      PostResult
    >;

    const unavailablePlatforms = request.platforms.filter(
      (platform) => !this.services.has(platform),
    );

    if (unavailablePlatforms.length > 0) {
      const errorMessage = `Plataformas não configuradas: ${unavailablePlatforms.join(", ")}`;

      await updatePostStatus(post.id, "FAILED" as any);

      throw new Error(errorMessage);
    }

    await updatePostStatus(post.id, "POSTING" as any);

    const postPromises = request.platforms.map(async (platform) => {
      const service = this.services.get(platform)!;

      try {
        const result = await service.post(request.content);
        results[platform] = result;

        await createPostLog(post.id, platform, "SUCCESS", result);

        if (service["credentials"]) {
          const newCredentials = service[
            "credentials"
          ] as SocialMediaCredentials;
          if (newCredentials.accessToken) {
            await updateCredentialTokens(
              request.userId,
              platform,
              newCredentials.accessToken,
              newCredentials.refreshToken,
              newCredentials.expiresAt,
            );
          }
        }
      } catch (error: any) {
        const errorResult: PostResult = {
          success: false,
          error: error.message,
          platform,
        };

        results[platform] = errorResult;

        await createPostLog(post.id, platform, "ERROR", null, error.message);
      }
    });

    await Promise.all(postPromises);

    const successfulPosts = Object.values(results).filter(
      (result) => result.success,
    ).length;
    const failedPosts = Object.values(results).filter(
      (result) => !result.success,
    ).length;

    const finalStatus = successfulPosts > 0 ? "POSTED" : "FAILED";
    await updatePostStatus(post.id, finalStatus as any, results);

    return {
      success: successfulPosts > 0,
      postId: post.id,
      results,
      totalPlatforms: request.platforms.length,
      successfulPosts,
      failedPosts,
    };
  }

  async validateAllCredentials(): Promise<Record<Platform, boolean>> {
    await this.initializeServices();

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
    await this.initializeServices();

    const refreshResults: Record<Platform, SocialMediaCredentials | null> =
      {} as Record<Platform, SocialMediaCredentials | null>;

    const refreshPromises = Array.from(this.services.entries()).map(
      async ([platform, service]) => {
        try {
          const newCredentials = await service.refreshAccessToken();
          refreshResults[platform] = newCredentials;

          await updateCredentialTokens(
            this.userId,
            platform,
            newCredentials.accessToken,
            newCredentials.refreshToken,
            newCredentials.expiresAt,
          );
        } catch (error) {
          console.error(`Erro ao renovar token ${platform}:`, error);
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
}
