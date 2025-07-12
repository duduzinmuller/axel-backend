import { Router, Request, Response } from "express";
import { requireAdmin } from "../../middleware/admin";
import { auth } from "../../middleware/auth";
import { makeUpdateUserManagementController } from "../../factories/controller/admin/admin";
import { HttpResponse } from "../../types/httpRequest";

export const adminRouter = Router();

adminRouter.patch(
  "/:userId",
  auth,
  requireAdmin,
  async (req: Request, res: Response) => {
    const controller = makeUpdateUserManagementController();

    const { statusCode, body }: HttpResponse = await controller.execute(req);

    res.status(statusCode).send(body);
  },
);
