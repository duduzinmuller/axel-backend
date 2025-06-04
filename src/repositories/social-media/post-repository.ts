import {
  Platform,
  MediaType,
  PostStatus,
  LogStatus,
  type Post,
} from "@prisma/client";
import prisma from "../../../prisma/prisma";
import { PostResult } from "../../services/social-media/base-social-media";

const platformMap: Record<string, Platform> = {
  instagram: Platform.INSTAGRAM,
  facebook: Platform.FACEBOOK,
  youtube: Platform.YOUTUBE,
  tiktok: Platform.TIKTOK,
  kwai: Platform.KWAI,
};

const mediaTypeMap: Record<string, MediaType> = {
  image: MediaType.IMAGE,
  video: MediaType.VIDEO,
};

export interface CreatePostData {
  userId: string;
  content: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  hashtags?: string[];
  platforms: string[];
  scheduledAt?: Date;
}

export async function createPost(data: CreatePostData): Promise<Post> {
  try {
    const prismaPlatforms = data.platforms
      .map((p) => platformMap[p])
      .filter(Boolean);
    const prismaMediaType = data.mediaType
      ? mediaTypeMap[data.mediaType]
      : null;

    return await prisma.post.create({
      data: {
        userId: data.userId,
        content: data.content,
        mediaUrl: data.mediaUrl,
        mediaType: prismaMediaType,
        hashtags: data.hashtags || [],
        platforms: prismaPlatforms,
        status: data.scheduledAt ? PostStatus.SCHEDULED : PostStatus.PENDING,
        scheduledAt: data.scheduledAt,
      },
    });
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw new Error("Falha ao criar post");
  }
}

export async function updatePostStatus(
  postId: string,
  status: PostStatus,
  results?: Record<string, PostResult>,
): Promise<void> {
  try {
    await prisma.post.update({
      where: { id: postId },
      data: {
        status,
        results: results ? JSON.stringify(results) : undefined,
        postedAt: status === PostStatus.POSTED ? new Date() : undefined,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Erro ao atualizar status do post:", error);
    throw new Error("Falha ao atualizar status do post");
  }
}

export async function getUserPosts(
  userId: string,
  limit = 50,
  offset = 0,
): Promise<Post[]> {
  try {
    return await prisma.post.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
      include: {
        logs: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
  } catch (error) {
    console.error("Erro ao buscar posts do usuário:", error);
    return [];
  }
}

export async function getScheduledPosts(): Promise<Post[]> {
  try {
    return await prisma.post.findMany({
      where: {
        status: PostStatus.SCHEDULED,
        scheduledAt: {
          lte: new Date(),
        },
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar posts agendados:", error);
    return [];
  }
}

export async function createPostLog(
  postId: string,
  platform: string,
  status: "SUCCESS" | "ERROR" | "WARNING",
  responseData?: any,
  errorMessage?: string,
): Promise<void> {
  try {
    const prismaPlatform = platformMap[platform];
    if (!prismaPlatform) {
      throw new Error(`Platform '${platform}' is not mapped correctly.`);
    }

    const logStatus =
      status === "SUCCESS"
        ? LogStatus.SUCCESS
        : status === "ERROR"
          ? LogStatus.ERROR
          : LogStatus.WARNING;

    await prisma.postLog.create({
      data: {
        postId,
        platform: prismaPlatform,
        status: logStatus,
        responseData: responseData ?? undefined,
        errorMessage,
      },
    });
  } catch (error) {
    console.error("Erro ao criar log do post:", error);
    throw error;
  }
}

export async function getPostById(postId: string): Promise<Post | null> {
  try {
    return await prisma.post.findUnique({
      where: { id: postId },
      include: {
        logs: {
          orderBy: { createdAt: "desc" },
        },
        user: true,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

export async function deletePost(postId: string): Promise<void> {
  try {
    await prisma.post.delete({
      where: { id: postId },
    });
  } catch (error) {
    console.error("Erro ao deletar post:", error);
    throw new Error("Falha ao deletar post");
  }
}

export async function getPostStats(userId: string): Promise<{
  total: number;
  posted: number;
  failed: number;
  scheduled: number;
  pending: number;
}> {
  try {
    const [total, posted, failed, scheduled, pending] = await Promise.all([
      prisma.post.count({ where: { userId } }),
      prisma.post.count({ where: { userId, status: PostStatus.POSTED } }),
      prisma.post.count({ where: { userId, status: PostStatus.FAILED } }),
      prisma.post.count({ where: { userId, status: PostStatus.SCHEDULED } }),
      prisma.post.count({ where: { userId, status: PostStatus.PENDING } }),
    ]);

    return { total, posted, failed, scheduled, pending };
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    return { total: 0, posted: 0, failed: 0, scheduled: 0, pending: 0 };
  }
}
