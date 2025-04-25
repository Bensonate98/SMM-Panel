/*
  Warnings:

  - You are about to drop the column `type` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `remark` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_type` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `type`,
    ADD COLUMN `remark` VARCHAR(191) NOT NULL,
    ADD COLUMN `transaction_type` ENUM('deposit', 'order purchase') NOT NULL;
