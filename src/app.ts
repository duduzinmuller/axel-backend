import express from "express";
import { userRouter } from "./routes/user/routes-user";
import { createVerificationRouter } from "./routes/email-verification/routes-email-verification";
import { accessCodeRouter } from "./routes/access-code/routes-access-code";
import { paymentRouter } from "./routes/payment/routes-payment";
import { googleGenerateRouter } from "./routes/google-generate/routes-google-generate";
import { scriptRouter } from "./routes/scripts/script";
import { interactionRouter } from "./routes/interaction/routes-interaction";
import { tvRouter } from "./routes/commands/routes-tv";
import { musicRouter } from "./routes/spotify/routes-spotify";
import { weatherRouter } from "./routes/weather/weather";
import cors from "cors";
import path from "path";
import uploadRouter from "./routes/upload/route-upload";
import authRouter from "./routes/auth";
import voicesRouter from "./routes/voices";
import cameraRouter from "./routes/commands/camera-routes";
import { socialMediaRoutes } from "./routes/social/routes-social";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: `${process.env.FRONT_END_APP_API}`,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/social-media", socialMediaRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api/users", userRouter);
app.use("/api", createVerificationRouter);
app.use("/api/code", accessCodeRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/google", googleGenerateRouter);
app.use("/api/scripts", scriptRouter);
app.use("/api/my", interactionRouter);
app.use("/api/tv", tvRouter);
app.use("/api/music", musicRouter);
app.use("/api/weather", weatherRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/upload", uploadRouter);
app.use("/api/auth", authRouter);
app.use("/api", voicesRouter);
app.use("/api/camera", cameraRouter);
export { app };
