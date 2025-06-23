export interface HttpRequest {
  params?: {
    userId?: string;
    paymentId?: string;
  };
  body?: any;
  user?: any;
  userId?: string;
  file?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
}
