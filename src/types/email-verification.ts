export interface EmailVerification {
  id: string;
  email: string;
  code: string;
  expiresAt: Date;
  createdAt: Date;
  userId: string;
}
