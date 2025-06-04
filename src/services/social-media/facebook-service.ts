import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export class FacebookService extends BaseSocialService {
  constructor(credentials: SocialMediaCredentials) {
    super(credentials, "facebook");
  }

  async post(content: PostContent): Promise<PostResult> {
    try {
      const postData: any = {
        message: content.text,
      };

      if (content.mediaUrl) {
        if (content.mediaType === "image") {
          postData.url = content.mediaUrl;
        } else if (content.mediaType === "video") {
          postData.source = content.mediaUrl;
        }
      }

      if (content.hashtags && content.hashtags.length > 0) {
        postData.message +=
          "\n\n" + content.hashtags.map((tag) => `#${tag}`).join(" ");
      }

      const endpoint =
        content.mediaType === "video"
          ? `https://graph.facebook.com/v18.0/${this.credentials.pageId}/videos`
          : `https://graph.facebook.com/v18.0/${this.credentials.pageId}/feed`;

      const response = await this.makeRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Erro ao postar no Facebook");
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
        `https://graph.facebook.com/v18.0/${this.credentials.pageId}?fields=id,name`,
        { method: "GET" },
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  async refreshAccessToken(): Promise<SocialMediaCredentials> {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&fb_exchange_token=${this.credentials.accessToken}`,
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Falha ao renovar token do Facebook");
    }

    return {
      ...this.credentials,
      accessToken: data.access_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    };
  }
}
