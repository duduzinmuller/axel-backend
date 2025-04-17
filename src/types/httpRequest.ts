import { Request } from "express";

export interface HttpRequest {
  params: {
    userId: string;
  };
  body: Request;
}
