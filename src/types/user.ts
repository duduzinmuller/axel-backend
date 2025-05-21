import { Plan, Role } from "@prisma/client";

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
  currency: string;
  amount: number;
  paymentMethod?: string;
  paymentMethodId?: string;
  paymentProvider: string;
  paymentUrl?: string;
  transactionDetails?: any;
  notificationSent: boolean;
  email: string;
  recipient: string;
  plan: Plan;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailVerification {
  id: string;
  email: string;
  code: string;
  expiresAt: Date;
  createdAt: Date;
  userId: string;
}

export interface AccessCode {
  id: string;
  code: string;
  plan: Plan;
  used: boolean;
  expiresAt: Date;
  createdAt: Date;
}

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

export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELED";
