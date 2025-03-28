import prisma from "../config/db.js";

export const saveDeposit = async (amount, userId)=>{
  return await prisma.deposit.create({
    data:{
      amount,
      userId
    }
  });
}