/*
  Warnings:

  - The values [PROCESSING,APPROVED,REJECTED,IN_PROCESS,IN_MEDIATION,CANCELLED,REFUNDED,CHARGED_BACK] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `errorMessage` on the `EmailNotification` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `preference` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the column `preferenceValue` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the `AuthProviderAccount` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserPreference` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `UserPreference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'CANCELED');
ALTER TABLE "Payment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Payment" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
ALTER TABLE "Payment" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "AuthProviderAccount" DROP CONSTRAINT "AuthProviderAccount_userId_fkey";

-- AlterTable
ALTER TABLE "EmailNotification" DROP COLUMN "errorMessage";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "orderId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageUrl",
DROP COLUMN "password",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "provider" "Provider" NOT NULL,
ADD COLUMN     "providerId" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserPreference" DROP COLUMN "preference",
DROP COLUMN "preferenceValue",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "theme" TEXT;

-- DropTable
DROP TABLE "AuthProviderAccount";

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
