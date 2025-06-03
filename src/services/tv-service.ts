import { Client } from "node-ssdp";
import axios from "axios";
import { tvConfig } from "../config/tv-config";

type TVDevice = {
  ip: string;
  name: any;
  model?: any;
  location?: string;
};

export class TVService {
  async discoverTVs(): Promise<TVDevice[]> {
    return new Promise((resolve) => {
      const client = new Client();
      const devices: TVDevice[] = [];

      client.on("response", (headers, statusCode, rinfo) => {
        devices.push({
          ip: rinfo.address,
          name: headers.SERVER || "Unknown TV",
          model: headers["MODEL-NAME"] || undefined,
          location: headers.LOCATION,
        });
      });

      client.search(tvConfig.ssdpSearchTarget);

      setTimeout(() => {
        client.stop();
        resolve(devices);
      }, tvConfig.timeoutMs);
    });
  }

  async sendCommand(
    ip: string,
    command: "powerOn" | "powerOff" | "volumeUp" | "volumeDown",
  ): Promise<boolean> {
    try {
      const url = `http://${ip}:${tvConfig.tvControlPort}/api/v1/commands`;
      let data;

      switch (command) {
        case "powerOn":
          data = { command: "KEY_POWERON" };
          break;
        case "powerOff":
          data = { command: "KEY_POWEROFF" };
          break;
        case "volumeUp":
          data = { command: "KEY_VOLUP" };
          break;
        case "volumeDown":
          data = { command: "KEY_VOLDOWN" };
          break;
        default:
          throw new Error("Comando inválido");
      }

      await axios.post(url, data, { timeout: 1500 });
      return true;
    } catch (error) {
      console.error("Erro ao enviar comando para TV:", error);
      return false;
    }
  }
}
