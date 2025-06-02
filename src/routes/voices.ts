import { Router, Request, Response } from "express";
import { VoiceController } from "../controller/voice-controller";
import axios from "axios";

const voicesRouter = Router();
const voiceController = new VoiceController();

voicesRouter.get("/voices", (req: Request, res: Response) =>
  voiceController.getVoices(req, res),
);

voicesRouter.post(
  "/generate-voice",
  async (req: Request, res: Response): Promise<any> => {
    const { text, voiceId } = req.body;

    try {
      const response = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
        {
          text,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.75,
            similarity_boost: 0.75,
          },
        },
        {
          headers: {
            "xi-api-key": process.env.GENERATE_VOICE_AI,
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer",
        },
      );

      res.set("Content-Type", "audio/mpeg");
      res.send(Buffer.from(response.data));
    } catch (error: any) {
      console.error(
        "Erro ao gerar voz:",
        error.response?.data || error.message,
      );
      const status = error.response?.status || 500;
      const message = error.response?.data || "Erro ao gerar voz";
      res.status(status).send(message);
    }
  },
);

export default voicesRouter;
