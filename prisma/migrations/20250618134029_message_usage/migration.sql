/*
  Warnings:

  - You are about to drop the column `city` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `federal_unit` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `street_name` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `street_number` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `zip_code` on the `Payment` table. All the data in the column will be lost.

*/
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

-- CreateTable
CREATE TABLE "MessageUsage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessageUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MessageUsage_userId_month_year_key" ON "MessageUsage"("userId", "month", "year");

-- AddForeignKey
ALTER TABLE "MessageUsage" ADD CONSTRAINT "MessageUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
