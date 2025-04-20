import { GoogleGenerateService } from "../../../services/google-generate";
import { GoogleGenerateController } from "../../../controller/google-generate/google-generate";

export const makeGoogleGenerateController = () => {
  const googleGenerateService = new GoogleGenerateService();

  const googleGenerateController = new GoogleGenerateController(
    googleGenerateService,
  );

  return googleGenerateController;
};
