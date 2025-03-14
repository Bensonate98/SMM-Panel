import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { registerUserController, verifyUserController, loginUserController } from "../controllers/authControllers.js"
import { validateRegisterInput, validateVerificationInput, validateLoginInput } from "../middlewares/validate.js";


router.post("/register", validateRegisterInput, registerUserController);
router.patch("/verify", validateVerificationInput, verifyUserController);
router.post("/login", validateLoginInput, loginUserController);
export default router;