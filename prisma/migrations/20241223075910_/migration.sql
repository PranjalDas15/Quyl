/*
  Warnings:

  - Changed the type of `cohort` on the `Students` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Students" DROP COLUMN "cohort",
ADD COLUMN     "cohort" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Cohort";
