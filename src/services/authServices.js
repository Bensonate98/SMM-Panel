import prisma from "../config/db.js";

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
    await prisma.user.update({
      where: {id: user.id},
      data: {isVerified: "true", verificationCode: null}
    })
  }else{
    throw Error;
  }
}