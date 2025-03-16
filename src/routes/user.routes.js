import express from "express";
const router = express.Router();
import { authenticateToken } from "../middlewares/authorization.js";
import { viewUserDasboard } from "../controllers/user.controller.js";


router.get("/dashboard", authenticateToken, viewUserDasboard);
export default router;