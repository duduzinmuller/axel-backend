import { Request, Response } from "express";
import { login, handleCallback, skipToNext } from "../../services/spotify";

export const loginController = (req: Request, res: Response) => {
  const authorizeURL = login();
  res.redirect(authorizeURL);
};

export const callbackController = async (req: Request, res: Response) => {
  const { code } = req.query;
  try {
    await handleCallback(code as string);
    res.status(200).send("Autenticado com sucesso!");
  } catch (err) {
    res.status(400).send("Erro na autenticação");
  }
};

export const nextTrackController = async (req: Request, res: Response) => {
  try {
    await skipToNext();
    res.send("Música trocada com sucesso!");
  } catch (error) {
    console.error("Erro ao trocar de música:", error);
    res.status(400).send("Erro ao trocar de música");
  }
};

// Outros controladores para diferentes ações...
