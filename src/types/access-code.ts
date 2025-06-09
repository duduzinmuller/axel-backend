import { Plan } from "@prisma/client";

export interface AccessCode {
  id: string;
  code: string;
  plan: Plan;
  used: boolean;
  expiresAt: Date;
  createdAt: Date;
}
