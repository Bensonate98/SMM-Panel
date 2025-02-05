-- AlterTable
ALTER TABLE `user` ADD COLUMN `isVerified` VARCHAR(191) NOT NULL DEFAULT 'false',
    ADD COLUMN `verificationCode` VARCHAR(191) NULL;
