import { Plan, Role, UserStatus } from "@prisma/client";
import { Payment } from "./payment";
import { EmailVerification } from "./email-verification";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  role?: Role;
  provider?: string;
  providerId?: string;
  plan: Plan;
  createdAt: Date;
  updatedAt: Date;
  isVerified: Boolean;

  payments?: Payment[];
  emailVerifications?: EmailVerification[];
}
export interface UpdateUserData {
  name?: string;
  email?: string;
  password?: string;
  image?: string;
}

export interface PlanPercentage {
  plan: Plan;
  count: number;
  percentage: number;
}
