import { Router } from "express";
import { SocialMediaController } from "../../controller/social/social-media-controller";

const router = Router();
const socialMediaController = new SocialMediaController();

router.post(
  "/post",
  socialMediaController.postToMultiplePlatforms.bind(socialMediaController),
);

router.get(
  "/validate/:userId",
  socialMediaController.validateCredentials.bind(socialMediaController),
);

router.post(
  "/refresh/:userId",
  socialMediaController.refreshTokens.bind(socialMediaController),
);

router.get(
  "/platforms/:userId",
  socialMediaController.getConnectedPlatforms.bind(socialMediaController),
);

export { router as socialMediaRoutes };
