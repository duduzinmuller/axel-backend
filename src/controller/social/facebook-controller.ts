import { FacebookService } from "../../services/facebook-service";
import { badRequest, ok, serverError } from "../helpers/http";

export class FacebookController {
  facebookService: FacebookService;

  constructor(facebookService: FacebookService) {
    this.facebookService = facebookService;
  }

  async schedulePost(httpRequest: any) {
    try {
      const { pageId, message, accessToken, scheduledTime } = httpRequest.body;

      if (!pageId || !message || !accessToken || !scheduledTime) {
        return badRequest("Todos os campos são obrigatórios.");
      }

      const result = await this.facebookService.schedulePost(
        pageId,
        message,
        accessToken,
        scheduledTime,
      );

      return ok(result);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
