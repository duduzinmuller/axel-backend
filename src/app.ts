import express from "express";
import { userRouter } from "./routes/user/routes-user";
import { createVerificationRouter } from "./routes/email-verification/routes-email-verification";
import { accessCodeRouter } from "./routes/access-code/routes-access-code";
import { paymentRouter } from "./routes/payment/routes-payment";
import { googleGenerateRouter } from "./routes/google-generate/routes-google-generate";
import { scriptRouter } from "./routes/scripts/script";
import { interactionRouter } from "./routes/interaction/routes-interaction";
import { tvRouter } from "./routes/tv/routes-tv";
import { musicRouter } from "./routes/spotify/routes-spotify";
import { weatherRouter } from "./routes/weather/weather";
import { socialRouter } from "./routes/social/routes-social";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);

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
app.use("/api/social", socialRouter);
export { app };
