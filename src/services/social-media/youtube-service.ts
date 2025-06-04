import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export class YouTubeService extends BaseSocialService {
  constructor(credentials: SocialMediaCredentials) {
    super(credentials, "youtube");
  }

  async post(content: PostContent): Promise<PostResult> {
    try {
      if (!content.mediaUrl || content.mediaType !== "video") {
        throw new Error("YouTube requer um vídeo");
      }

      const videoData = {
        snippet: {
          title: content.text.substring(0, 100),
          description: this.formatDescription(content),
          tags: content.hashtags || [],
          categoryId: "22",
        },
        status: {
          privacyStatus: "public",
        },
      };

      const response = await this.makeRequest(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,status",
        {
          method: "POST",
          body: JSON.stringify(videoData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Erro ao postar no YouTube");
      }

      return {
        success: true,
        postId: data.id,
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
        "https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",
        {
          method: "GET",
        },
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  async refreshAccessToken(): Promise<SocialMediaCredentials> {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.YOUTUBE_CLIENT_ID!,
        client_secret: process.env.YOUTUBE_CLIENT_SECRET!,
        refresh_token: this.credentials.refreshToken!,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Falha ao renovar token do YouTube");
    }

    return {
      ...this.credentials,
      accessToken: data.access_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    };
  }

  private formatDescription(content: PostContent): string {
    let description = content.text;

    if (content.hashtags && content.hashtags.length > 0) {
      description +=
        "\n\n" + content.hashtags.map((tag) => `#${tag}`).join(" ");
    }

    return description;
  }
}
