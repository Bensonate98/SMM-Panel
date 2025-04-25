import express from "express";
import { transactionHistory } from "../controllers/transaction.controller.js";
import { authenticateUser } from "../middlewares/authorization.js";
const router = express.Router();

router.get("/history", authenticateUser, transactionHistory);

export default router;