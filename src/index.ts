import "dotenv/config";
import { app } from "./app";
import { SchedulerService } from "./services/scheduler";

const schedulerService = new SchedulerService();
schedulerService.start();

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT} 🚀`),
);
