import { Router, Request, Response } from "express";
import { makeWeatherController } from "../../factories/controller/weather/weather";

export const weatherRouter = Router();

weatherRouter.get("/temperature", async (req: Request, res: Response) => {
  const weatherController = makeWeatherController();

  const { statusCode, body } = await weatherController.execute(req);

  res.status(statusCode).json(body);
});
