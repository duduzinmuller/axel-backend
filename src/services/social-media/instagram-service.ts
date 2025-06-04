import {
  BaseSocialService,
  PostContent,
  PostResult,
  SocialMediaCredentials,
} from "./base-social-media";

export class InstagramService extends BaseSocialService {
  constructor(credentials: SocialMediaCredentials) {
    super(credentials, "instagram");
  }

  async post(content: PostContent): Promise<PostResult> {
    try {
      if (!content.mediaUrl) {
        throw new Error("Instagram requer uma imagem ou vídeo");
      }

      const mediaResponse = await this.makeRequest(
        `https://graph.instagram.com/v18.0/${this.credentials.userId}/media`,
        {
          method: "POST",
          body: JSON.stringify({
            image_url:
              content.mediaType === "image" ? content.mediaUrl : undefined,
            video_url:
              content.mediaType === "video" ? content.mediaUrl : undefined,
            caption: this.formatCaption(content),
            media_type: content.mediaType?.toUpperCase(),
          }),
        },
      );

      const mediaData = await mediaResponse.json();

      if (!mediaResponse.ok) {
        throw new Error(
          mediaData.error?.message || "Erro ao fazer upload da mídia",
        );
      }

      const publishResponse = await this.makeRequest(
        `https://graph.instagram.com/v18.0/${this.credentials.userId}/media_publish`,
        {
          method: "POST",
          body: JSON.stringify({
            creation_id: mediaData.id,
          }),
        },
      );

      const publishData = await publishResponse.json();

      if (!publishResponse.ok) {
        throw new Error(
          publishData.error?.message || "Erro ao publicar no Instagram",
        );
      }

      return {
        success: true,
        postId: publishData.id,
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
        `https://graph.instagram.com/v18.0/${this.credentials.userId}?fields=id,username`,
        { method: "GET" },
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  async refreshAccessToken(): Promise<SocialMediaCredentials> {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.credentials.accessToken}`,
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Falha ao renovar token do Instagram");
    }

    return {
      ...this.credentials,
      accessToken: data.access_token,
      expiresAt: new Date(Date.now() + data.expires_in * 1000),
    };
  }

  private formatCaption(content: PostContent): string {
    let caption = content.text;

    if (content.hashtags && content.hashtags.length > 0) {
      caption += "\n\n" + content.hashtags.map((tag) => `#${tag}`).join(" ");
    }

    return caption;
  }
}
