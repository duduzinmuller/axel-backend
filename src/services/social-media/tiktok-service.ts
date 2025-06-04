import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export class TikTokService extends BaseSocialService {
  constructor(credentials: SocialMediaCredentials) {
    super(credentials, "tiktok");
  }

  async post(content: PostContent): Promise<PostResult> {
    try {
      if (!content.mediaUrl || content.mediaType !== "video") {
        throw new Error("TikTok requer um vídeo");
      }

      const initResponse = await this.makeRequest(
        "https://open-api.tiktok.com/share/video/upload/",
        {
          method: "POST",
          body: JSON.stringify({
            video_url: content.mediaUrl,
            text: this.formatCaption(content),
            privacy_level: "PUBLIC_TO_EVERYONE",
            disable_duet: false,
            disable_comment: false,
            disable_stitch: false,
          }),
        },
      );

      const data = await initResponse.json();

      if (!initResponse.ok) {
        throw new Error(data.error?.message || "Erro ao postar no TikTok");
      }

      return {
        success: true,
        postId: data.share_id,
        platform: this.platform,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message,
        platform: this.platform,
      };
    }
  }

  async validateCredentials(): Promise<boolean> {
    try {
      const response = await this.makeRequest(
        "https://open-api.tiktok.com/user/info/",
        { method: "GET" },
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  async refreshAccessToken(): Promise<SocialMediaCredentials> {
    const response = await fetch(
      "https://open-api.tiktok.com/oauth/refresh_token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_key: process.env.TIKTOK_CLIENT_KEY!,
          client_secret: process.env.TIKTOK_CLIENT_SECRET!,
          grant_type: "refresh_token",
          refresh_token: this.credentials.refreshToken!,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Falha ao renovar token do TikTok");
    }

    return {
      ...this.credentials,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    };
  }

  private formatCaption(content: PostContent): string {
    let caption = content.text;

    if (content.hashtags && content.hashtags.length > 0) {
      caption += " " + content.hashtags.map((tag) => `#${tag}`).join(" ");
    }

    return caption.substring(0, 150);
  }
}
