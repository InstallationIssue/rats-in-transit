/*
  Warnings:

  - You are about to drop the `Encounter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Monster` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Encounter";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Monster";
PRAGMA foreign_keys=on;
