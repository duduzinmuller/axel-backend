import { Router } from "express";
import { CameraController } from "../../controller/commands/camera-controller";

const cameraRouter = Router();

cameraRouter.get("/scan", async (req, res) => {
  const httpResponse = await CameraController.scan({ query: req.query });

  res.status(httpResponse.statusCode).json(httpResponse.body);
});

export default cameraRouter;
