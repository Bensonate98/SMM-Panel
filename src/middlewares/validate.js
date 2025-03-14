import { registerSchema, verifyEmailSchema, loginSchema  } from "../util/validator.js";

export const validateRegisterInput =  (req, res, next) =>{
  const userData = req.body;
  const { error } = registerSchema.validate(userData);
  if(error){

    return res.render("home/register", {error})
  }
  req.userData = userData;
  next();
}

export const validateVerificationInput =  (req, res, next) =>{
  const code = req.body;
  const { error } = verifyEmailSchema.validate(code);
  if(error){
    return res.render("home/verify", {error})
  }
  req.code = code;
  next();
}

export const validateLoginInput =  (req, res, next) =>{
  const loginData = req.body;
  const { error } = loginSchema.validate(loginData);
  if(error){
    return res.render("home/login", {error, req})
  }
  req.user = loginData;
  next();
}

