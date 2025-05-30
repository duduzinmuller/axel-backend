import { Router } from "express";
import { VoiceController } from "../controller/voice-controller";

const router = Router();
const voiceController = new VoiceController();

router.get("/voices", voiceController.getVoices);

export default router;
