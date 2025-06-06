import prisma from "../../../prisma/prisma";
import { badRequest, ok, serverError } from "../helpers/http";

export class UploadImageController {
  async execute(httpRequest: any) {
    try {
      const file = httpRequest.file;
      const userId = httpRequest.body.userId;

      if (!file) {
        return badRequest("Nenhum arquivo enviado.");
      }

      const imageUrl = `${process.env.BACKEND_URL}/uploads/${file.filename}`;

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { image: imageUrl },
      });

      return ok({ imageUrl, user: updatedUser });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
