/*
  Warnings:

  - Added the required column `isOnline` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_login` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "isOnline" BOOLEAN NOT NULL,
ADD COLUMN     "last_login" TIMESTAMP(3) NOT NULL;
