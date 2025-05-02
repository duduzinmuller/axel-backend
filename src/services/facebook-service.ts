import { facebookApi } from "../config/facebook";

export class FacebookService {
  async schedulePost(
    pageId: string,
    message: string,
    accessToken: string,
    scheduledTime: number,
  ) {
    const response = await facebookApi.post(`/${pageId}/feed`, {
      message,
      published: false,
      scheduled_publish_time: scheduledTime,
      access_token: accessToken,
    });
    return response.data;
  }

  async scheduleInstagramPost(
    pageId: string,
    imageUrl: string,
    caption: string,
    accessToken: string,
    scheduledTime: number,
  ) {
    const mediaResponse = await facebookApi.post(`/${pageId}/media`, {
      image_url: imageUrl,
      caption,
      access_token: accessToken,
    });

    const publishResponse = await facebookApi.post(`/${pageId}/media_publish`, {
      creation_id: mediaResponse.data.id,
      published: false,
      scheduled_publish_time: scheduledTime,
      access_token: accessToken,
    });

    return publishResponse.data;
  }
}
