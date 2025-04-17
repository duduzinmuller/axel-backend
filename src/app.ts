import express from "express";
import { userRouter } from "./routes/user/routes-user";
import { createVerificationRouter } from "./routes/email-verification/routes-email-verification";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api", createVerificationRouter);

export { app };
