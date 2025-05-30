import { VoiceService } from "../services/voice-service";
import { Request, Response } from "express";

export class VoiceController {
  private voiceService: VoiceService;

  constructor() {
    this.voiceService = new VoiceService();
  }

  getVoices = async (req: Request, res: Response) => {
    try {
      const voices = await this.voiceService.getVoices();
      res.status(200).json(voices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar vozes" });
    }
  };
}
