import { OAuth2Client } from "google-auth-library";

export class GoogleAuthAdapter {
  private client: OAuth2Client;

  constructor() {
    this.client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  }

  async verifyToken(token: string) {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error("Invalid Google token");
    }

    return {
      provider: "GOOGLE",
      providerId: payload.sub,
      name: payload.name,
      email: payload.email,
      image: payload.picture,
    };
  }
}
