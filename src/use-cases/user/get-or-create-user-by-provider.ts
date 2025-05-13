import { GetOrCreateUserByProviderRepository } from "../../repositories/user/get-or-create-user-by-provider";
import { TokensGeneratorAdapter } from "../../adapters/token-generator";
import { Provider } from "@prisma/client";

export class GetOrCreateUserByProviderUseCase {
  getOrCreateUserByProviderRepository: GetOrCreateUserByProviderRepository;
  tokensGeneratorAdapter: TokensGeneratorAdapter;

  constructor(
    getOrCreateUserByProviderRepository: GetOrCreateUserByProviderRepository,
    tokensGeneratorAdapter: TokensGeneratorAdapter,
  ) {
    this.getOrCreateUserByProviderRepository =
      getOrCreateUserByProviderRepository;
    this.tokensGeneratorAdapter = tokensGeneratorAdapter;
  }
  async execute(provider: Provider, token: string, adapter: any) {
    const userData = await adapter.verifyToken(token);

    const user = await this.getOrCreateUserByProviderRepository.execute(
      provider,
      userData.providerId,
      userData,
    );

    return {
      ...user,
      tokens: this.tokensGeneratorAdapter.execute(user.id),
    };
  }
}
