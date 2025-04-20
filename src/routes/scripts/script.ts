import { exec } from "child_process";
import express, { Response, Request } from "express";
import { auth } from "../../middleware/auth";
import os from "os";

export const scriptRouter = express();

scriptRouter.post("/shutdown", auth, (request: Request, response: Response) => {
  let shutdownCommand = "";

  if (
    os.platform() === "linux" &&
    os.release().toLowerCase().includes("microsoft")
  ) {
    shutdownCommand = "shutdown /s /t 5";
  } else {
    switch (os.platform()) {
      case "win32":
        shutdownCommand = "shutdown /s /t 5";
        break;
      case "linux":
        shutdownCommand = "sudo shutdown -h now";
        break;
      case "darwin":
        shutdownCommand = "sudo shutdown -h now";
        break;
      default:
        response
          .status(500)
          .send({ message: "Sistema operacional não suportado" });
        return;
    }
  }

  if (
    os.platform() === "linux" &&
    os.release().toLowerCase().includes("microsoft")
  ) {
    shutdownCommand = 'cmd.exe /c "shutdown /s /t 5"';
  }

  exec(shutdownCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("Erro ao desligar" + error);
      response.status(500).send({ message: "Erro ao desligar o computador" });
      return;
    }
    response.send({ message: "Desligando o computador...." });
  });
});

scriptRouter.post("/restart", auth, (request: Request, response: Response) => {
  let restartCommand = "";

  if (
    os.platform() === "linux" &&
    os.release().toLowerCase().includes("microsoft")
  ) {
    restartCommand = 'cmd.exe /c "shutdown /r /t 5"';
  } else {
    switch (os.platform()) {
      case "win32":
        restartCommand = "shutdown /r /t 5";
        break;
      case "linux":
        restartCommand = "sudo reboot";
        break;
      case "darwin":
        restartCommand = "sudo shutdown -r now";
        break;
      default:
        response
          .status(500)
          .send({ message: "Sistema operacional não suportado" });
        return;
    }
  }

  exec(restartCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("Erro ao reiniciar" + error);
      response.status(500).send({ message: "Erro ao reiniciar o computador" });
      return;
    }
    response.send({ message: "Reiniciando o computador...." });
  });
});

scriptRouter.post("/lock", auth, (request: Request, response: Response) => {
  let lockCommand = "";

  if (
    os.platform() === "linux" &&
    os.release().toLowerCase().includes("microsoft")
  ) {
    // Detect WSL
    lockCommand = 'cmd.exe /c "rundll32.exe user32.dll,LockWorkStation"';
  } else {
    switch (os.platform()) {
      case "win32":
        lockCommand = "rundll32.exe user32.dll,LockWorkStation";
        break;
      case "linux":
        lockCommand =
          "xdg-screensaver lock || gnome-screensaver-command -l || qdbus org.freedesktop.ScreenSaver /ScreenSaver Lock";
        break;
      case "darwin":
        lockCommand = "pmset displaysleepnow";
        break;
      default:
        response
          .status(500)
          .send({ message: "Sistema operacional não suportado" });
        return;
    }
  }

  exec(lockCommand, (error, stdout, stderr) => {
    if (error) {
      console.error("Erro ao bloquear" + error);
      response.status(500).send({ message: "Erro ao bloquear o computador" });
      return;
    }
    response.send({ message: "Computador bloqueado." });
  });
});
