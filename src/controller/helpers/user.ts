import { notFound } from "./http";

export const userNotFoundResponse = (userId: string) =>
  notFound("Usuario não encontrado.");
