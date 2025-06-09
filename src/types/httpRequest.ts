export interface HttpRequest {
  params?: {
    userId?: string;
  };
  body?: any;
  user?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
}
