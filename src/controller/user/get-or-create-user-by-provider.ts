import { GetOrCreateUserByProviderUseCase } from "../../use-cases/user/get-or-create-user-by-provider";
import { GoogleAuthAdapter } from "../../adapters/google-auth";
import { FacebookAuthAdapter } from "../../adapters/facebook-auth";
import { ok, serverError } from "../helpers/http";

export class GetOrCreateUserByProviderController {
  getOrCreateUserByProviderUseCase: GetOrCreateUserByProviderUseCase;

  constructor(
    getOrCreateUserByProviderUseCase: GetOrCreateUserByProviderUseCase,
  ) {
    this.getOrCreateUserByProviderUseCase = getOrCreateUserByProviderUseCase;
  }

  async execute(httpRequest: any) {
    try {
      const { provider, token } = httpRequest.body;

      let adapter: GoogleAuthAdapter | FacebookAuthAdapter;
      if (provider === "GOOGLE") {
        adapter = new GoogleAuthAdapter();
      } else if (provider === "FACEBOOK") {
        adapter = new FacebookAuthAdapter();
      } else {
        throw new Error("Unsupported provider");
      }

      const user = await this.getOrCreateUserByProviderUseCase.execute(
        provider,
        token,
        adapter,
      );

      return ok(user);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
