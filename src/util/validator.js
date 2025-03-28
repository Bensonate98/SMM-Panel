import Joi from "joi";

export const registerSchema = new Joi.object({
  firstname: Joi.string()
                .required()
                .messages({
                  "string.base": "firstname should be a text",
                  "any.required": "firstname is required"
                }),
  lastname: Joi.string()
               .required()
               .messages({
                "string.base": "last name should be a text",
                "any.required": "Last name is required"
              }),
  email: Joi.string()
            .email()
            .required()
            .messages({
              "string.email": "invalid email",
              "any.required": "Email is required"
            }),
  password: Joi.string()
               .pattern(new RegExp('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$'))
               .min(8)
               .max(30)
               .required()
               .messages({
                "string.pattern.base": 'Password should be alphanumeric with special characters',
                "string.min": "Password too short",
                "string.max": "Password too long",
                "any.required": 'Password is required'
              }),
  confirmPassword: Joi.string()
                      .valid(Joi.ref("password"))
                      .required()
                      .messages({
                        "any.only": 'Password do not match'
                      })
})

export const loginSchema = new Joi.object({
  email: Joi.string()
            .email()
            .required()
            .messages({
              "string.email": "invalid email",
              "any.required": "Email is required"
            }),
  password: Joi.string()
               .required()
               .messages({
                "any.required": 'Password is required'
              })
})


  export const checkErrorAndValidate = (err, res)=>{
    if(err.meta && err.meta.target === "User_email_key"){
      return res.render("home/register", {error:{message: "An account with this email already exists"}, title: "Register"});
    }

    if(err.message === "invalid user"){
      return res.render("home/login", {error:{message: "Wrong credentials"}, title: "Login"});
    }
  }

