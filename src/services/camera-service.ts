import ping from "ping";
import portscanner from "portscanner";
import { networkConfig } from "../config/network-confg";

export interface CameraDevice {
  ip: string;
  openPorts: number[];
  isCamera: boolean;
}

export const CameraService = {
  async scanNetwork(subnet: any): Promise<CameraDevice[]> {
    const devices: CameraDevice[] = [];

    const ips = Array.from(
      { length: networkConfig.endIp - networkConfig.startIp + 1 },
      (_, i) => `${networkConfig.subnet}.${i + networkConfig.startIp}`,
    );

    console.log("🔍 Iniciando varredura de rede...");

    for (const ip of ips) {
      const res = await ping.promise.probe(ip, { timeout: 2 });

      if (res.alive) {
        const openPorts = await this.checkOpenPorts(ip);

        const isCamera =
          openPorts.includes(networkConfig.rtspPort) ||
          openPorts.includes(8080);

        devices.push({ ip, openPorts, isCamera });

        console.log(`✅ Dispositivo: ${ip} | Portas abertas: ${openPorts}`);
      }
    }

    return devices.filter((d) => d.isCamera);
  },

  async checkOpenPorts(ip: string): Promise<number[]> {
    const openPorts: number[] = [];

    for (const port of networkConfig.portsToCheck) {
      const status = await portscanner.checkPortStatus(port, ip);
      if (status === "open") {
        openPorts.push(port);
      }
    }

    return openPorts;
  },
};
