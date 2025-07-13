import cron from "node-cron";
import { makeCheckExpiringPlansController } from "../factories/controller/user/check-expiring-plans";

export class SchedulerService {
  private checkExpiringPlansController = makeCheckExpiringPlansController();

  start() {
    cron.schedule(
      "0 9 * * *",
      async () => {
        try {
          await this.checkExpiringPlansController.execute({});
        } catch (error) {
          console.error("❌ Erro na verificação de planos expirando:", error);
        }
      },
      {
        timezone: "America/Sao_Paulo",
      },
    );
    cron.schedule(
      "0 18 * * *",
      async () => {
        try {
          await this.checkExpiringPlansController.execute({});
        } catch (error) {
          console.error("❌ Erro na verificação de planos expirando:", error);
        }
      },
      {
        timezone: "America/Sao_Paulo",
      },
    );
  }
}
