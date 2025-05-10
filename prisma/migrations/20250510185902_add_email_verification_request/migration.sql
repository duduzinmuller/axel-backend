/*
  Warnings:

  - You are about to drop the column `contactId` on the `EmailVerification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmailVerification" DROP COLUMN "contactId";

-- CreateTable
CREATE TABLE "EmailVerificationRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "code" VARCHAR(6) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailVerificationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailVerificationRequest_email_key" ON "EmailVerificationRequest"("email");
