-- CreateTable
CREATE TABLE "LearningSession" (
    "id" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "nextStep" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LearningSession_pkey" PRIMARY KEY ("id")
);
