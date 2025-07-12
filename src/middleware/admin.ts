import { Request, Response, NextFunction } from "express";

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      res.status(401).json({
        error: "Token de autenticação não fornecido ou inválido",
      });
      return;
    }

    if ((req.user as any).role !== "ADMIN") {
      res.status(403).json({
        error:
          "Acesso negado. Apenas administradores podem acessar este recurso.",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Erro no middleware de admin:", error);
    res.status(500).json({
      error: "Erro interno na verificação de permissões",
    });
    return;
  }
};
