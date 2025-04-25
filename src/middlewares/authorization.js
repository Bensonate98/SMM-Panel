import jwt from "jsonwebtoken";
import { accessSecret} from "../config/secrets.js";

export const authenticateUser = (req, res, next)=>{
  const accessToken = req.cookies.accessToken;
  if(!accessToken){
    if(!req.cookies.refreshToken) return res.redirect("/login");
      return res.redirect("/refresh-token");
  }
  jwt.verify(accessToken, accessSecret, (err, decoded)=>{
    if(err) return res.redirect("/login");
    req.user = decoded;
    next();
  });
}