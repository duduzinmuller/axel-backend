import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGeneratorError } from "../errors/google-generator";
export class GoogleGenerateService {
  async execute(question: string) {
    try {
      const genAi = new GoogleGenerativeAI(
        process.env.GOOGLE_GENERATE_API_KEY!,
      );
      const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

      const result = await model.generateContent(question);

      if (!result?.response || !result.response.candidates?.length) {
        throw new GoogleGeneratorError();
      }

      const candidate = result.response.candidates[0];
      let textResponse;
      textResponse = candidate.content.parts[0].text;

      if (textResponse) {
        return { question: textResponse };
      }
    } catch (error) {
      console.error("Erro ao gerar conteudo", error);
    }
  }
}
