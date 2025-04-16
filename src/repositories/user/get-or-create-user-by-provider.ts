import prisma from "../../../prisma/prisma";
import { Provider } from "../../generated/prisma";
import { User } from "../../types/user";

export class GetOrCreateUserByProviderRepository {
  async execute(provider: Provider, providerId: string, userData: User) {
    let user = await prisma.user.findUnique({
      where: {
        provider_providerId: {
          provider: provider,
          providerId: providerId,
        },
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          image: userData.image,
          provider,
          providerId,
          password: userData.password || "defaultPassword123",
        },
      });
    }

    return user;
  }
}
