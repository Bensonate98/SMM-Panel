import { encryptPassword, checkErrorAndValidate, generateVerificationCode } from "../util/helper.js";
import { createUser, verifyUserEmail } from "../services/authServices.js";
import sendMail from "../services/emailSevice.js";

export const registerUser = async (req, res) =>{
  try{
    const { firstname, lastname, email, password } = req.userData
    const hashedPassword = await encryptPassword(password);
    const verificationCode = generateVerificationCode();
    const user = await createUser(firstname, lastname, email, hashedPassword, verificationCode);
    sendMail(email, "Verify Your Email", "verifyEmail", user);
    return res.status(200).send("Email sent successfully");
  } catch(err){
    checkErrorAndValidate(err, res);
    console.log(err);
  }
};

export const verifyUser = async (req, res) =>{
  try{
    const {verificationCode} = req.code;
    const isVerified = await verifyUserEmail(verificationCode);
    console.log(isVerified);
  }
  catch(err){
    console.log(err)
  }
}