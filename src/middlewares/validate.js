import { registerSchema, loginSchema  } from "../util/validator.js";

export const validateRegisterInput =  (req, res, next) =>{
  const userData = req.body;
  const { error } = registerSchema.validate(userData);
  if(error){
    return res.render("home/register", {error, title: "Register"})
  }
  req.userData = userData;
  next();
}

export const validateLoginInput =  (req, res, next) =>{
  const loginData = req.body;
  const { error } = loginSchema.validate(loginData);
  if(error){
    return res.render("home/login", {error, req, title: "Login"})
  }
  req.user = loginData;
  next();
}

