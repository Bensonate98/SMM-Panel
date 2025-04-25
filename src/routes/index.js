import express from "express"
import webRoutes from "./web.routes.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import depositRoutes from "./deposit.routes.js";
import paymentRoutes from "./payment.routes.js";
import transactionRoutes from "./transaction.route.js";

const router = express.Router();

router.use(webRoutes);
router.use(authRoutes);
router.use(paymentRoutes);
router.use("/user", userRoutes);
router.use("/user/deposit", depositRoutes);
router.use("/user/transaction", transactionRoutes);

export default router;