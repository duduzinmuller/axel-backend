import { Router, Request, Response } from "express";
import { TVController } from "../../controller/commands/tv-controller";
import { TVService } from "../../services/tv-service";

export const tvRouter = Router();

const tvService = new TVService();
const tvController = new TVController(tvService);

tvRouter.get("/scan", async (req: Request, res: Response): Promise<any> => {
  const result = await tvController.scan(req, res);
  return res.status(result.statusCode).json(result.body);
});

tvRouter.post("/control", async (req: Request, res: Response): Promise<any> => {
  const result = await tvController.control(req, res);
  return res.status(result.statusCode).json(result.body);
});
