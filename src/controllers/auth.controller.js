import { checkErrorAndValidate } from "../util/validator.js";
import { 
  generateAccesToken, 
  sendAcessTokenAsCookie, 
  sendRefreshTokenAsCookie 
} from "../util/helper.js";

import { 
  createUser, 
  loginUser, 
  saveRefreshToken, 
  findRefreshToken, 
  deleteRefreshToken
} from "../services/auth.service.js";

import sendMail from "../services/email.service.js";

export const registerUserController = async (req, res) =>{
  try{
    const { firstname, lastname, email, password } = req.userData
    const { user, accessToken, refreshToken } = await createUser(firstname, lastname, email, password);
    await saveRefreshToken(refreshToken, user.id);
    sendAcessTokenAsCookie(res, accessToken);
    sendRefreshTokenAsCookie(res, refreshToken);
    await sendMail(user.email, "Registration successful", "welcome");
    return res.redirect("/user/dashboard");
  } catch(err){
    checkErrorAndValidate(err, res);
  }
};

export const loginUserController = async (req, res)=>{
  try{
    const { email, password } = req.user;
    const { user, accessToken, refreshToken } = await loginUser(email, password);
    await saveRefreshToken(refreshToken, user.id);
    sendAcessTokenAsCookie(res, accessToken);
    sendRefreshTokenAsCookie(res, refreshToken);
    return res.redirect("/user/dashboard");
  }
  catch(err){
    checkErrorAndValidate(err, res);
  }
}

export const refreshTokenController = async (req, res)=>{
  const token = req.cookies.refreshToken;
  try{
    const fetchedToken = await findRefreshToken(token);
    if(!fetchedToken || fetchedToken.expiresAt < new Date()) return res.redirect("/login");
    sendAcessTokenAsCookie(res, generateAccesToken(fetchedToken.userId));
    return res.redirect("/user/dashboard");
  }
  catch(err){
    console.log(err)
  }
}

export const logoutUserController = async (req, res)=>{
  try{
    const refreshToken = req.cookies.refreshToken;
    if(refreshToken){
      await deleteRefreshToken(refreshToken);
    }
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.redirect("/login");
  }
  catch(err){
    console.log(err);
  }
}