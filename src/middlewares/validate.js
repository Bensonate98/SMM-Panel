import { registerSchema, verifyEmailSchema  } from "../util/validator.js";

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
    // return res.render("home/register", {error})
    res.status(400).json({error});
  }
  req.code = code;
  next();
}