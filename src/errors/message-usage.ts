export class MessageLimitExceededError extends Error {
  constructor(plan: string, limit: number) {
    super(
      `Limite de mensagens excedido para o plano ${plan}. Limite: ${limit} mensagens por dia.`,
    );
    this.name = "MessageLimitExceededError";
  }
}

export class UserPlanNotFoundError extends Error {
  constructor() {
    super("Plano do usuário não encontrado");
    this.name = "UserPlanNotFoundError";
  }
}
