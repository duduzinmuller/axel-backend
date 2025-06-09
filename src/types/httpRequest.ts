export interface HttpRequest {
  params?: {
    userId?: string;
  };
  body?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
}
