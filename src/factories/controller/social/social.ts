import { FacebookController } from "../../../controller/social/facebook-controller";
import { FacebookService } from "../../../services/facebook-service";

export const makeFacebookController = () => {
  const facebookService = new FacebookService();
  const facebookController = new FacebookController(facebookService);
  return facebookController;
};
