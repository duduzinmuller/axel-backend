import jwt from "jsonwebtoken";

export class TokensVerifierAdapter {
  execute(token: string, secret: string): string | jwt.JwtPayload {
    return jwt.verify(token, secret);
  }
}
