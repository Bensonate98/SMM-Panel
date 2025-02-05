import bcrypt from "bcrypt";
import crypto from "crypto";

export const encryptPassword = async (password)=>{
  const saltRounds = 11;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export const checkErrorAndValidate = (err, res)=>{
  if(err.meta.target === "User_email_key"){
    return res.render("home/register", {error:{message: "An account with this email already exists"}});
  }
}

export const generateVerificationCode = ()=>{
  const buffer = crypto.randomBytes(3); 
  const code = parseInt(buffer.toString('hex'), 16) % 1000000;
  return code.toString().padStart(6, '0');
};