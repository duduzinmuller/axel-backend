export class GoogleGeneratorError extends Error {
  constructor() {
    super("Erro ao gerar conteúdo");
    this.name = "GoogleGeneratorError";
  }
}
