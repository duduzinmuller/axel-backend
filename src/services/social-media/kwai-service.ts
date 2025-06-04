import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export class KwaiService extends BaseSocialService {
  constructor(credentials: SocialMediaCredentials) {
    super(credentials, "kwai");
  }

  async post(content: PostContent): Promise<PostResult> {
    try {
      if (!content.mediaUrl || content.mediaType !== "video") {
        throw new Error("Kwai requer um vídeo");
      }

      const postData = {
        video_url: content.mediaUrl,
        description: this.formatDescription(content),
        privacy: "public",
        allow_comment: true,
        allow_download: true,
      };

      const response = await this.makeRequest(
        "https://api.kwai.com/v1/video/upload",
        {
          method: "POST",
          body: JSON.stringify(postData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Erro ao postar no Kwai");
      }

      return {
        success: true,
        postId: data.video_id,
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
        "https://api.kwai.com/v1/user/info",
        { method: "GET" },
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  async refreshAccessToken(): Promise<SocialMediaCredentials> {
    const response = await fetch("https://api.kwai.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.KWAI_CLIENT_ID!,
        client_secret: process.env.KWAI_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: this.credentials.refreshToken!,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Falha ao renovar token do Kwai");
    }

    return {
      ...this.credentials,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    };
  }

  private formatDescription(content: PostContent): string {
    let description = content.text;

    if (content.hashtags && content.hashtags.length > 0) {
      description += " " + content.hashtags.map((tag) => `#${tag}`).join(" ");
    }

    return description;
  }
}
