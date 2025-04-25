import express from "express";
import {processTransaction, processTransactionUsingWebhook, displaySuccessPage} from "../controllers/payment.controller.js";
const router = express.Router();

router.post("/paystack/webhook", processTransactionUsingWebhook);
router.get("/paystack/callback", processTransaction);
router.get("/payment/success", displaySuccessPage)

export default router;