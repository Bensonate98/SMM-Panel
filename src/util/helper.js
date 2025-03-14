import bcrypt from "bcrypt";
import crypto from "crypto";
import { jwtSecret } from "../config/secrets.js";
import jwt from "jsonwebtoken";


export const encryptPassword = async (password)=>{
  const saltRounds = 11;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export const generateVerificationCode = ()=>{
  const buffer = crypto.randomBytes(3); 
  const code = parseInt(buffer.toString('hex'), 16) % 1000000;
  return code.toString().padStart(6, '0');
};

export const generateJWT = (userId)=>{
  jwt.sign({ payLoad: userId }, jwtSecret, { expiresIn: '1h' }); 
};