import express, { Request, Response } from "express";
import { upload } from "../../utils/upload";
import { UploadImageController } from "../../controller/upload/upload-image";

const router = express.Router();

interface UploadRequest extends Request {
  file?: Express.Multer.File;
  body: { userId: string };
}

router.post(
  "/image",
  upload.single("image"),
  async (request: UploadRequest, response: Response) => {
    const controller = new UploadImageController();

    const { statusCode, body }: any = await controller.execute(request);

    response.status(statusCode).send(body);
  },
);

export default router;
