import prisma from "../config/db.js";
import { comparePassword, encryptPassword } from "../util/helper.js";

export const fetchUser = async (userId)=>{
  return await prisma.user.findUnique({where:{
    id: userId
  }})
}

export const updateUserBalance = async (userId, amount)=>{
  return await prisma.user.update({
    where:{id: userId },
    data:{ balance: { increment: parseFloat(amount)/100 } }
  })
}

export const updateUserData = async (userId, firstname, lastname, email)=>{
  return await prisma.user.update({
    where: { id: userId },
    data: { firstname, lastname, email }
  });
}

export const updateUserPassword = async (userId, password, newPassword)=>{
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if(!user) throw Error("invalid user");
  const match = await comparePassword(password, user.password);
  if(!match){
    throw Error("incorrect password");
  }
  const hashedPassword = await encryptPassword(newPassword);
  return await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword }
  });
}