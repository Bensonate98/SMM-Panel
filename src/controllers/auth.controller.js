import { checkErrorAndValidate } from "../util/validator.js";
import { sendTokenAsCookie } from "../util/helper.js";
import { createUser, loginUser } from "../services/auth.service.js";
import sendMail from "../services/email.service.js";

export const registerUserController = async (req, res) =>{
  try{
    const { firstname, lastname, email, password } = req.userData
    const { user, token } = await createUser(firstname, lastname, email, password);
    sendTokenAsCookie(res, token);
    await sendMail(user.email, "Registration succesful", "welcome");
    return res.redirect("/dashboard");
  } catch(err){
    checkErrorAndValidate(err, res);
  }
};

export const loginUserController = async (req, res)=>{
  try{
    const { email, password } = req.user;
    const loggedUser = await loginUser(email, password);
  }
  catch(err){
    console.log(err)
  }
}