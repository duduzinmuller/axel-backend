/*
  Warnings:

  - You are about to drop the column `city` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `federal_unit` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `street_name` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `street_number` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmailVerification" DROP CONSTRAINT "EmailVerification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "city",
DROP COLUMN "federal_unit",
DROP COLUMN "neighborhood",
DROP COLUMN "street_name",
DROP COLUMN "street_number",
DROP COLUMN "zip_code",
ADD COLUMN     "payer" JSONB;

-- DropEnum
DROP TYPE "MediaType";

-- DropEnum
DROP TYPE "Platform";

-- DropEnum
DROP TYPE "PostStatus";

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailVerification" ADD CONSTRAINT "EmailVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
