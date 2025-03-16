import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/secrets.js";

export const authenticateToken = (req, res, next)=>{
  const token = req.cookies.accessToken;
  if(!token) return res.redirect("/login");
  jwt.verify(token, jwtSecret, (err, decoded)=>{
    if(err) return res.redirect("/login");
    req.user = decoded;
    next();
  });
}