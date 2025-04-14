import { Plan, Provider } from "../generated/prisma";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  provider: Provider;
  providerId: string;
  plan: Plan;
  createdAt: Date;
  updatedAt: Date;

  interactions?: Interaction[];
  preferences?: UserPreference[];
  payments?: Payment[];
  emailVerifications?: EmailVerification[];
}

export interface Interaction {
  id: string;
  userId: string;
  input: string;
  response: string;
  timestamp: Date;
  context?: any;
}

export interface UserPreference {
  id: string;
  userId: string;
  language: string;
  theme?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId: string;
  externalId?: string;
  status: PaymentStatus;
  amount: number;
  paymentMethod?: string;
  paymentMethodId?: string;
  paymentProvider: string;
  paymentUrl?: string;
  transactionDetails?: any;
  notificationSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailVerification {
  id: string;
  code: string;
  expiresAt: Date;
  contactId: string;
  createdAt: Date;
  userId: string;
}

type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELED";
