import { Request } from "express";

export interface HttpRequest {
  params?: {
    userId?: string;
  };
  body?: Request;
}

export interface HttpResponse {
  statusCode: number;
  body: string;
}
