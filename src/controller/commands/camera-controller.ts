import { CameraService } from "../../services/camera-service";
import { ok, serverError, badRequest } from "../helpers/http";

export const CameraController = {
  async scan(httpRequest: any) {
    try {
      const { subnet } = httpRequest.query || {};

      if (!subnet) {
        return badRequest("Subnet é obrigatória, exemplo: 192.168.1");
      }

      const cameras = await CameraService.scanNetwork(subnet);
      return ok(cameras);
    } catch (error) {
      console.error("Erro na varredura:", error);
      return serverError();
    }
  },
};
