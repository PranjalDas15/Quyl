-- CreateEnum
CREATE TYPE "Cohort" AS ENUM ('AY_2022_23', 'AY_2023_24', 'AY_2024_25');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Online', 'Offline');

-- CreateEnum
CREATE TYPE "Courses" AS ENUM ('CBSE_9_Math', 'CBSE_9_Science');

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "student_name" TEXT NOT NULL,
    "cohort" "Cohort" NOT NULL,
    "courses" "Courses" NOT NULL,
    "date_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);
