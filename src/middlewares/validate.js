import { registerSchema, loginSchema, profileUpdateSchema, passwordUpdateSchema } from "../util/validator.js";

export const validateRegisterInput =  (req, res, next) =>{
  const userData = req.body;
  const { error } = registerSchema.validate(userData);
  if(error){
    return res.render("home/register", {error, title: "Register"})
  }
  req.user = userData;
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

export const validateProfileUpdateInput =  (req, res, next) =>{
  const profileData = req.body;
  const { error } = profileUpdateSchema.validate(profileData);
  if(error){
    return res.status(400).json({success: false, message: error.message});
  }
  req.profileData = profileData;
  next();
}

export const validatePasswordUpdateInput = (req, res, next)=>{
  const passwordData = req.body;
  const { error } = passwordUpdateSchema.validate(passwordData);
  if(error){
    return res.status(400).json({success: false, message: error.message});
  }
  req.passwordData = passwordData;
  next();
}

