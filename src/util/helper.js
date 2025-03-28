import bcrypt from "bcrypt";
import { accessSecret, refreshSecret } from "../config/secrets.js";
import jwt from "jsonwebtoken";


export const encryptPassword = async (password)=>{
  const saltRounds = 11;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

// export const generateVerificationCode = ()=>{
//   const buffer = crypto.randomBytes(3); 
//   const code = parseInt(buffer.toString('hex'), 16) % 1000000;
//   return code.toString().padStart(6, '0');
// };

export const generateAccesToken = (userId)=>{
  return jwt.sign({ payload: userId }, accessSecret, { expiresIn: '1m' }); 
};

export const generateRefreshToken = (userId)=>{
  return jwt.sign({ payload: userId }, refreshSecret, { expiresIn: '7d' }); 
};

export const sendAcessTokenAsCookie = (res, token) =>{
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1 * 60 * 1000
  });
}

export const sendRefreshTokenAsCookie = (res, token) =>{
    res.cookie("refreshToken", token, {
      httpOnly: true,  
      secure: false, 
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
  });
}