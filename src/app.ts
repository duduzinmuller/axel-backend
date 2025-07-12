import express from "express";
import { userRouter } from "./routes/user/routes-user";
import { createVerificationRouter } from "./routes/email-verification/routes-email-verification";
import { accessCodeRouter } from "./routes/access-code/routes-access-code";
import { paymentRouter } from "./routes/payment/routes-payment";
import { googleGenerateRouter } from "./routes/google-generate/routes-google-generate";
import cors from "cors";
import path from "path";
import uploadRouter from "./routes/upload/route-upload";
import authRouter from "./routes/auth/router-auth";
import { emailNotificationRouter } from "./routes/email-notification/routes-email-notification";
import { messageUsageRouter } from "./routes/message-usage/routes-message-usage";
import { adminRouter } from "./routes/admin/routes-admin";

const app = express();
app.use(express.json());

const allowedOrigins = [
  process.env.FRONT_END_APP_API,
  process.env.FRONT_END_APP_DEVELOPMENT,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"), false);
      }
    },
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api/users", userRouter);
app.use("/api/email-notification", emailNotificationRouter);
app.use("/api/email-verification", createVerificationRouter);
app.use("/api/code", accessCodeRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/google", googleGenerateRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/upload", uploadRouter);
app.use("/api/auth", authRouter);
app.use("/api/message-usage", messageUsageRouter);
app.use("/api/admin", adminRouter);
export { app };
