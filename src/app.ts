import express from "express";
import { userRouter } from "./routes/user/routes-user";
import { createVerificationRouter } from "./routes/email-verification/routes-email-verification";
import { accessCodeRouter } from "./routes/access-code/routes-access-code";
import { paymentRouter } from "./routes/payment/routes-payment";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api", createVerificationRouter);
app.use("/api/code", accessCodeRouter);
app.use("/api/payment", paymentRouter);
export { app };
