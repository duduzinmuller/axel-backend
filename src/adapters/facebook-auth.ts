import axios from "axios";

export class FacebookAuthAdapter {
  async verifyToken(token: string) {
    const response = await axios.get(
      `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${token}`,
    );

    const data = response.data;
    if (!data || !data.id) {
      throw new Error("Invalid Facebook token");
    }

    return {
      provider: "FACEBOOK",
      providerId: data.id,
      name: data.name,
      email: data.email,
      image: data.picture?.data?.url,
    };
  }
}
