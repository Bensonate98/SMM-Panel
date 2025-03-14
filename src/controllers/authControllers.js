import { encryptPassword, generateVerificationCode } from "../util/helper.js";
import { checkErrorAndValidate, checkCodeAndValidate } from "../util/validator.js";
import { createUser, verifyUserEmail, loginUser } from "../services/authServices.js";
import sendMail from "../services/emailSevice.js";

export const registerUserController = async (req, res) =>{
  try{
    const { firstname, lastname, email, password } = req.userData
    const hashedPassword = await encryptPassword(password);
    const verificationCode = generateVerificationCode();
    const user = await createUser(firstname, lastname, email, hashedPassword, verificationCode);
    sendMail(email, "Verify Your Email", "verifyEmail", user); 
    return res.render("home/verify", {error: null});
  } catch(err){
    checkErrorAndValidate(err, res);
  }
};

export const verifyUserController = async (req, res) =>{
  try{
    const {verificationCode} = req.code;
    const verifiedUser = await verifyUserEmail(verificationCode);
    sendMail(verifiedUser.email, "Registration successful", "welcome", verifiedUser);
    return res.redirect("/login?verified=true");
  }
  catch(err){
    console.log(err.message);
    checkCodeAndValidate(err, res);
  }
}

export const loginUserController = async (req, res)=>{
  try{
    const { email, password } = req.user;
    const loggedUser = await loginUser(email, password);
    
    throw Error("")
  }
  catch(err){
    console.log(err)
  }
}