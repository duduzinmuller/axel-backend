import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { execFile } from "child_process";
import fs from "fs";
import ffmpeg from "fluent-ffmpeg";

const routerWhisper = express.Router();
const upload = multer({ dest: "uploads/" });

function convertAnyAudioToWav(
  inputPath: string,
  outputPath: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions(["-ar 16000", "-ac 1", "-sample_fmt s16"])
      .toFormat("wav")
      .on("error", (err) => reject(err))
      .on("end", () => resolve())
      .save(outputPath);
  });
}

routerWhisper.post(
  "/whisper",
  upload.single("audio"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: "Arquivo de áudio é obrigatório" });
      return;
    }

    const originalAudioPath = path.resolve(req.file.path);
    const convertedAudioPath = originalAudioPath + ".wav";
    const modelPath = path.resolve("models/ggml-base.bin");
    const whisperCliPath = path.resolve("whisper.cpp/build/bin/whisper-cli");

    try {
      await convertAnyAudioToWav(originalAudioPath, convertedAudioPath);

      execFile(
        whisperCliPath,
        ["-m", modelPath, "-f", convertedAudioPath],
        (error, stdout) => {
          fs.unlink(originalAudioPath, () => {});
          fs.unlink(convertedAudioPath, () => {});

          if (error) {
            console.error("Erro ao executar whisper-cli:", error);
            res.status(500).json({ error: "Erro no processamento do áudio" });
            return;
          }

          const cleanedText = stdout
            .replace(
              /\[\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}\]/g,
              "",
            )
            .replace(/\s+/g, " ")
            .trim();

          res.json({ transcription: cleanedText });
        },
      );
    } catch (err) {
      fs.unlink(originalAudioPath, () => {});
      console.error("Erro ao converter áudio:", err);
      res.status(500).json({ error: "Falha na conversão do áudio" });
    }
  },
);

export default routerWhisper;
