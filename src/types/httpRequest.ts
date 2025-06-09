export interface HttpRequest {
  params?: {
    userId?: string;
  };
  body?: any;
  user?: any;
  file?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
}
