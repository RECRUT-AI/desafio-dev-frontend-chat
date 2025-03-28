abstract class BaseApiService {
  private readonly baseURL;

  protected constructor({ baseUrl = "" } = {}) {
    this.baseURL = baseUrl;
  }

  protected async fetch<T>(path: string, options?: RequestInit): Promise<T> {
    const configuration = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
    };

    const tag = path.split("?")[0];
    if (configuration.next) {
      configuration.next.tags = [tag];
    } else {
      configuration.next = { tags: [tag] };
    }

    try {
      const response = await fetch(
        `${this.baseURL}/${path.replace(/^\/+/, "")}`,
        configuration
      );

      if (response.ok) {
        return response.json();
      }

      throw new Error(`Fetch error: ${response.status}`, {
        cause: response.body,
      });
    } catch (error) {
      throw error;
    }
  }

  protected async get<T>(path: string, options?: RequestInit): Promise<T> {
    return await this.fetch<T>(path, { ...options, method: "GET" });
  }

  protected async post<T>(path: string, options?: RequestInit): Promise<T> {
    return await this.fetch<T>(path, { ...options, method: "POST" });
  }

  protected async put<T>(path: string, options?: RequestInit): Promise<T> {
    return await this.fetch<T>(path, { ...options, method: "PUT" });
  }
}

export default BaseApiService;
