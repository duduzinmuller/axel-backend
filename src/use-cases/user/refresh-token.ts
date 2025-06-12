import { TokensGeneratorAdapter } from "../../adapters/token-generator";
import { TokensVerifierAdapter } from "../../adapters/token-verifier";
import { UnauthorizedError } from "../../errors/user";
import jwt from "jsonwebtoken";

export class RefreshTokenUseCase {
  constructor(
    private tokensGeneratorAdapter: TokensGeneratorAdapter,
    private tokensVerifierAdapter: TokensVerifierAdapter,
  ) {
    this.tokensGeneratorAdapter = tokensGeneratorAdapter;
    this.tokensVerifierAdapter = tokensVerifierAdapter;
  }

  execute(refreshToken: string): { accessToken: string; refreshToken: string } {
    try {
      const decodedToken = this.tokensVerifierAdapter.execute(
        refreshToken,
        process.env.JWT_REFRESH_TOKEN_SECRET!,
      ) as jwt.JwtPayload;

      if (!decodedToken || !decodedToken.userId) {
        throw new UnauthorizedError();
      }
      return this.tokensGeneratorAdapter.execute(decodedToken.userId);
    } catch (error) {
      console.error(error);
      throw new UnauthorizedError();
    }
  }
}
