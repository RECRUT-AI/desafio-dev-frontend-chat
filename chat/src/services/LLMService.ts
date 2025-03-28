import BaseApiService from "@chat/services/BaseApiService";

export class LLMService extends BaseApiService {
  constructor() {
    super({ baseUrl: process.env.LLM_API_URL });
  }

  // TODO: Criar função para enviar e receber mensagens e áudio do LLM.
}

export const llmService = new LLMService();

export default llmService;
