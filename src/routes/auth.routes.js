import express from "express";
const router = express.Router();
import {
  registerUserController,
  loginUserController, 
  logoutUserController, 
  refreshTokenController 
} from "../controllers/auth.controller.js"
import { 
  validateRegisterInput, 
  validateLoginInput 
} from "../middlewares/validate.js";


router.post("/register", validateRegisterInput, registerUserController);
router.post("/login", validateLoginInput, loginUserController);
router.get("/refresh-token", refreshTokenController);
router.get("/logout", logoutUserController);
export default router;