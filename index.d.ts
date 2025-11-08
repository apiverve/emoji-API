declare module '@apiverve/emoji' {
  export interface emojiOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface emojiResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class emojiWrapper {
    constructor(options: emojiOptions);

    execute(callback: (error: any, data: emojiResponse | null) => void): Promise<emojiResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: emojiResponse | null) => void): Promise<emojiResponse>;
    execute(query?: Record<string, any>): Promise<emojiResponse>;
  }
}
