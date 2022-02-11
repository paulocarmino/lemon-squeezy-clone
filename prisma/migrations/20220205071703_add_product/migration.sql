/*
  Warnings:

  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusProduct" AS ENUM ('PUBLISHED', 'DRAFT');

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "status" "StatusProduct" NOT NULL DEFAULT E'DRAFT',
    "totalSales" INTEGER,
    "totalRevenue" DECIMAL(65,30),
    "photos" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
