import express, { Request, Response } from "express";
import { supabase } from "../../config/supabase";
import { OAuthCallbackController } from "../../controller/auth/oauth-callback";
import { HttpResponse } from "../../types/httpRequest";
import { OAuthLoginController } from "../../controller/auth/oauth-login";

const authRouter = express.Router();

authRouter.get("/login/:provider", async (req: Request, res: Response) => {
  const controller = new OAuthLoginController();
  const result: HttpResponse = await controller.execute(req);

  if (result.redirectUrl) {
    res.redirect(result.statusCode, result.redirectUrl);
  } else {
    res.status(result.statusCode).send(result.body);
  }
});

authRouter.get("/callback", async (req: Request, res: Response) => {
  const controller = new OAuthCallbackController();
  const { statusCode, body }: HttpResponse = await controller.execute(req);
  res.status(statusCode).json(body);
});

export default authRouter;
