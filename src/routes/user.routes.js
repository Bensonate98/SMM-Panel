import express from "express";
const router = express.Router();
import { authenticateUser } from "../middlewares/authorization.js";
import { validateProfileUpdateInput, validatePasswordUpdateInput } from "../middlewares/validate.js";
import { 
  viewUserDasboard, 
  userProfileData, 
  updateUserProfile, 
  changePasswordForm,
  updatePassword
} from "../controllers/user.controller.js";

router.get("/dashboard", authenticateUser, viewUserDasboard);
router.get("/profile-setting", authenticateUser, userProfileData);
router.post("/profile-update", validateProfileUpdateInput, authenticateUser, updateUserProfile);
router.get("/change-password", authenticateUser, changePasswordForm);
router.post("/change-password",authenticateUser, validatePasswordUpdateInput, updatePassword);

export default router;