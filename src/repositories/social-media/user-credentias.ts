import { Platform, type SocialCredentials } from "@prisma/client";
import prisma from "../../../prisma/prisma";
import { decrypt, encrypt } from "../../lib/crypto";
import { SocialMediaCredentials } from "../../services/social-media/base-social-media";

const platformMap: Record<string, Platform> = {
  instagram: Platform.INSTAGRAM,
  facebook: Platform.FACEBOOK,
  youtube: Platform.YOUTUBE,
  tiktok: Platform.TIKTOK,
  kwai: Platform.KWAI,
};

const reversePlatformMap: Record<Platform, string> = {
  [Platform.INSTAGRAM]: "instagram",
  [Platform.FACEBOOK]: "facebook",
  [Platform.YOUTUBE]: "youtube",
  [Platform.TIKTOK]: "tiktok",
  [Platform.KWAI]: "kwai",
};

export async function getUserCredentials(
  userId: string,
): Promise<Record<string, SocialMediaCredentials>> {
  try {
    const credentials = await prisma.socialCredentials.findMany({
      where: {
        userId,
        isActive: true,
      },
    });

    const result: Record<string, SocialMediaCredentials> = {};

    for (const cred of credentials) {
      const platformKey = reversePlatformMap[cred.platform];

      result[platformKey] = {
        accessToken: decrypt(cred.accessToken),
        refreshToken: cred.refreshToken
          ? decrypt(cred.refreshToken)
          : undefined,
        userId: cred.platformUserId || undefined,
        pageId: cred.pageId || undefined,
        channelId: cred.channelId || undefined,
        expiresAt: cred.expiresAt || undefined,
      };
    }

    return result;
  } catch (error) {
    console.error("Erro ao buscar credenciais do usuário:", error);
    throw new Error("Falha ao buscar credenciais");
  }
}

export async function saveUserCredentials(
  userId: string,
  platform: string,
  credentials: SocialMediaCredentials,
): Promise<void> {
  try {
    const prismaplatform = platformMap[platform];
    if (!prismaplatform) {
      throw new Error(`Plataforma não suportada: ${platform}`);
    }

    await prisma.socialCredentials.upsert({
      where: {
        userId_platform: {
          userId,
          platform: prismaplatform,
        },
      },
      update: {
        accessToken: encrypt(credentials.accessToken),
        refreshToken: credentials.refreshToken
          ? encrypt(credentials.refreshToken)
          : null,
        platformUserId: credentials.userId,
        pageId: credentials.pageId,
        channelId: credentials.channelId,
        expiresAt: credentials.expiresAt,
        isActive: true,
        updatedAt: new Date(),
      },
      create: {
        userId,
        platform: prismaplatform,
        accessToken: encrypt(credentials.accessToken),
        refreshToken: credentials.refreshToken
          ? encrypt(credentials.refreshToken)
          : null,
        platformUserId: credentials.userId,
        pageId: credentials.pageId,
        channelId: credentials.channelId,
        expiresAt: credentials.expiresAt,
        isActive: true,
      },
    });

    console.log(`✅ Credenciais salvas para ${platform}`);
  } catch (error) {
    console.error(`Erro ao salvar credenciais para ${platform}:`, error);
    throw new Error(`Falha ao salvar credenciais para ${platform}`);
  }
}

export async function deleteUserCredentials(
  userId: string,
  platform: string,
): Promise<void> {
  try {
    const prismaplatform = platformMap[platform];
    if (!prismaplatform) {
      throw new Error(`Plataforma não suportada: ${platform}`);
    }

    await prisma.socialCredentials.updateMany({
      where: {
        userId,
        platform: prismaplatform,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });

    console.log(`✅ Credenciais removidas para ${platform}`);
  } catch (error) {
    console.error(`Erro ao remover credenciais para ${platform}:`, error);
    throw new Error(`Falha ao remover credenciais para ${platform}`);
  }
}

export async function getCredentialsByPlatform(
  userId: string,
  platform: string,
): Promise<SocialMediaCredentials | null> {
  try {
    const prismaplatform = platformMap[platform];
    if (!prismaplatform) {
      throw new Error(`Plataforma não suportada: ${platform}`);
    }

    const credential = await prisma.socialCredentials.findUnique({
      where: {
        userId_platform: {
          userId,
          platform: prismaplatform,
        },
        isActive: true,
      },
    });

    if (!credential) {
      return null;
    }

    return {
      accessToken: decrypt(credential.accessToken),
      refreshToken: credential.refreshToken
        ? decrypt(credential.refreshToken)
        : undefined,
      userId: credential.platformUserId || undefined,
      pageId: credential.pageId || undefined,
      channelId: credential.channelId || undefined,
      expiresAt: credential.expiresAt || undefined,
    };
  } catch (error) {
    console.error(`Erro ao buscar credencial para ${platform}:`, error);
    return null;
  }
}

export async function updateCredentialTokens(
  userId: string,
  platform: string,
  accessToken: string,
  refreshToken?: string,
  expiresAt?: Date,
): Promise<void> {
  try {
    const prismaplatform = platformMap[platform];
    if (!prismaplatform) {
      throw new Error(`Plataforma não suportada: ${platform}`);
    }

    await prisma.socialCredentials.updateMany({
      where: {
        userId,
        platform: prismaplatform,
        isActive: true,
      },
      data: {
        accessToken: encrypt(accessToken),
        refreshToken: refreshToken ? encrypt(refreshToken) : undefined,
        expiresAt,
        updatedAt: new Date(),
      },
    });

    console.log(`✅ Tokens atualizados para ${platform}`);
  } catch (error) {
    console.error(`Erro ao atualizar tokens para ${platform}:`, error);
    throw new Error(`Falha ao atualizar tokens para ${platform}`);
  }
}

export async function getExpiredCredentials(): Promise<SocialCredentials[]> {
  try {
    return await prisma.socialCredentials.findMany({
      where: {
        isActive: true,
        expiresAt: {
          lte: new Date(),
        },
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar credenciais expiradas:", error);
    return [];
  }
}

export async function getUserConnectedPlatforms(
  userId: string,
): Promise<string[]> {
  try {
    const credentials = await prisma.socialCredentials.findMany({
      where: {
        userId,
        isActive: true,
      },
      select: {
        platform: true,
      },
    });

    return credentials.map((cred) => reversePlatformMap[cred.platform]);
  } catch (error) {
    console.error("Erro ao buscar plataformas conectadas:", error);
    return [];
  }
}
