/*
  Warnings:

  - You are about to drop the column `published` on the `Todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "published",
ALTER COLUMN "isDone" SET DEFAULT false;
