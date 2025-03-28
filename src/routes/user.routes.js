import express from "express";
const router = express.Router();
import { authenticateUser } from "../middlewares/authorization.js";
import { viewUserDasboard } from "../controllers/user.controller.js";


router.get("/dashboard", authenticateUser, viewUserDasboard);
export default router;