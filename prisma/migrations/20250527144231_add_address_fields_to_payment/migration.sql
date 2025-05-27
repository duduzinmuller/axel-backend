/*
  Warnings:

  - The `provider` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "city" TEXT,
ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "federal_unit" TEXT,
ADD COLUMN     "neighborhood" TEXT,
ADD COLUMN     "street_name" TEXT,
ADD COLUMN     "street_number" TEXT,
ADD COLUMN     "zip_code" TEXT,
ALTER COLUMN "paymentProvider" SET DEFAULT 'MERCADOPAGO';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "provider",
ADD COLUMN     "provider" VARCHAR(50);

-- DropEnum
DROP TYPE "Provider";

-- CreateIndex
CREATE UNIQUE INDEX "User_provider_providerId_key" ON "User"("provider", "providerId");
