import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { registerUser, verifyUser } from "../controllers/authControllers.js"
import { validateRegisterInput, validateVerificationInput } from "../middlewares/validate.js";


router.post("/register", validateRegisterInput, registerUser);
router.patch("/verify", validateVerificationInput, verifyUser);
export default router;