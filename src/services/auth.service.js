import prisma from "../config/db.js";
import { encryptPassword, comparePassword, generateJWT } from "../util/helper.js";

export const createUser = async (firstname, lastname, email, password, verificationCode)=>{
  const hashedPassword = await encryptPassword(password);
    const user = await prisma.user.create({
      data:{
        firstname,
        lastname,
        email,
        password: hashedPassword,
      }
    });
    const token = generateJWT(user.id);
    return {user, token};
}


export const loginUser = async (email, password) => {
 const registeredUser = await prisma.user.findFirst({
    where: { email }
  });
  if(!registeredUser){
    throw Error("invalid user");
  }
  return registeredUser;
}