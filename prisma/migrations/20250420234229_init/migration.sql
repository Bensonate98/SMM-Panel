/*
  Warnings:

  - You are about to drop the column `transaction_type` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `type` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `transaction_type`,
    ADD COLUMN `type` ENUM('deposit', 'order purchase') NOT NULL;
