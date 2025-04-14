import express from "express";
import { userRouter } from "./routes/user/create-user";

const app = express();
app.use(express.json());

app.use("/api/users/", userRouter);

export { app };
