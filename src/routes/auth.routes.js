import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { registerUserController, loginUserController } from "../controllers/auth.controller.js"
import { validateRegisterInput, validateLoginInput } from "../middlewares/validate.js";


router.post("/register", validateRegisterInput, registerUserController);
router.post("/login", validateLoginInput, loginUserController);
export default router;