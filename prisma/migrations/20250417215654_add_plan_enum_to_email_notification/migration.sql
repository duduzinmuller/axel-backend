/*
  Warnings:

  - Added the required column `plan` to the `EmailNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailNotification" ADD COLUMN     "plan" "Plan" NOT NULL;
