export interface SocialMediaCredentials {
  accessToken: string;
  refreshToken?: string;
  userId?: string;
  pageId?: string;
  channelId?: string;
  expiresAt?: Date;
}

export interface PostContent {
  text: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  hashtags?: string[];
  location?: string;
}

export interface PostResult {
  success: boolean;
  postId?: string;
  error?: string;
  platform: string;
}

export abstract class BaseSocialService {
  protected credentials: SocialMediaCredentials;
  protected platform: string;

  constructor(credentials: SocialMediaCredentials, platform: string) {
    this.credentials = credentials;
    this.platform = platform;
  }

  abstract post(content: PostContent): Promise<PostResult>;
  abstract validateCredentials(): Promise<boolean>;
  abstract refreshAccessToken(): Promise<SocialMediaCredentials>;

  protected async makeRequest(
    url: string,
    options: RequestInit,
  ): Promise<Response> {
    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.credentials.accessToken}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (response.status === 401) {
      try {
        this.credentials = await this.refreshAccessToken();
        return fetch(url, {
          ...options,
          headers: {
            Authorization: `Bearer ${this.credentials.accessToken}`,
            "Content-Type": "application/json",
            ...options.headers,
          },
        });
      } catch (error) {
        throw new Error("Falha na autenticação. Reconecte sua conta.");
      }
    }

    return response;
  }
}
