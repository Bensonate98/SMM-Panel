import express from "express"
import webRoutes from "./web.routes.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import depositRoutes from "./deposit.routes.js";

const router = express.Router();

router.use(webRoutes);
router.use(authRoutes);
router.use("/user", userRoutes);
router.use("/user/deposit", depositRoutes);

export default router;