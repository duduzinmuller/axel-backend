import { Plan } from "@prisma/client";

export interface EmailNotification {
  id: string;
  recipient: string;
  subject: string;
  content: string;
  status: EmailStatus;
  sentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  plan: Plan;
}

export enum EmailStatus {
  PENDING = "PENDING",
  SENT = "SENT",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
}
