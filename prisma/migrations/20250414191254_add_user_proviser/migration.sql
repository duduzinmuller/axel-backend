-- AlterEnum
ALTER TYPE "Provider" ADD VALUE 'LOCAL';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "provider" SET DEFAULT 'LOCAL';
