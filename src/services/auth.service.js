import prisma from "../config/db.js";
import { comparePassword } from "../util/helper.js";

export const createUser = async (firstname, lastname, email, password, verificationCode)=>{
    const user = await prisma.user.create({
      data:{
        firstname,
        lastname,
        email,
        password,
        verificationCode
      }
    });
    return user
}

export const verifyUserEmail = async (verificationCode) =>{
  const user = await prisma.user.findFirst ({
    where: {verificationCode}
  });
  if(user){
    return await prisma.user.update({
      where: {id: user.id},
      data: {isVerified: "true", verificationCode: null}
    })
  } else{
    throw Error("invalid code");
  }
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