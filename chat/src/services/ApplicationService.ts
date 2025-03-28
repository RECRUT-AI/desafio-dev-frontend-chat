import BaseApiService from "@chat/services/BaseApiService";
import { Message } from "@chat/types";

class ApplicationService extends BaseApiService {
  constructor() {
    super();
  }

  public getMessages(): Promise<Message[]> {
    return this.get(`/api/messages`);
  }

  public storeMessage(message: Message): Promise<Message> {
    return this.post(`/api/messages`, { body: JSON.stringify(message) });
  }
}

const applicationService = new ApplicationService();
export default applicationService;
