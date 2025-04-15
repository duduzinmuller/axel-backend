import jwt from "jsonwebtoken";

export class TokensGeneratorAdapter {
  execute(userId: string) {
    if (typeof userId !== "string") {
      throw new Error("userId must be a string");
    }

    return {
      accessToken: jwt.sign({ userId }, process.env.JWT_ACCESS_TOKEN_SECRET!, {
        expiresIn: "15m",
      }),
      refreshToken: jwt.sign(
        { userId },
        process.env.JWT_REFRESH_TOKEN_SECRET!,
        { expiresIn: "30d" },
      ),
    };
  }
}
