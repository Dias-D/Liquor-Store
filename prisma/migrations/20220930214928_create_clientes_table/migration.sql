/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `DataNascimento` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Nome` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "dataNascimento",
DROP COLUMN "nome",
ADD COLUMN     "DataNascimento" TEXT NOT NULL,
ADD COLUMN     "Nome" TEXT NOT NULL;
