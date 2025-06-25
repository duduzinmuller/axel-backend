export interface HttpRequest {
  params?: {
    userId?: string;
    paymentId?: string;
    provider?: string;
  };
  body?: any;
  user?: any;
  userId?: string;
  file?: any;
  query?: any;
}

export interface HttpResponse {
  statusCode: number;
  body?: any;
  redirectUrl?: string;
}
