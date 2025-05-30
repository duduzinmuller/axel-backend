import axios from "axios";
import { Voice } from "../types/voice";

export class VoiceService {
  async getVoices(): Promise<Voice[]> {
    const apiUrl = "https://api.elevenlabs.io/v1/voices";
    const apiKey = process.env.GENERATE_VOICE_AI;

    const response = await axios.get(apiUrl, {
      headers: {
        "xi-api-key": apiKey,
      },
    });

    return response.data.voices.map((voice: any) => ({
      id: voice.voice_id,
      name: voice.name,
      language: voice.labels?.language || "unknown",
    }));
  }
}
