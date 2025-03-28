import express from "express";
const router = express.Router();
import { authenticateUser } from "../middlewares/authorization.js";
import { viewDepositForm, viewConfirmDepositForm, initiateDeposit } from "../controllers/deposit.controller.js";



router.get("/", authenticateUser, viewDepositForm);
router.get("/confirm", authenticateUser, viewConfirmDepositForm);
router.post("/", authenticateUser, initiateDeposit);
export default router;