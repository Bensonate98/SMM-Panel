import prisma from "../config/db.js";

export const saveTransaction = async (reference, userId, amount)=>{
  return await prisma.transaction.create({
   data:{
     amount: parseFloat(amount)/100,
     type: "deposit",
     reference,
     remark: "Account Deposit",
     user: { connect: { id: userId } }
   }
 });
};

export const fetchTransaction = async (reference)=>{
  return await prisma.transaction.findUnique({
    where:{ reference }
  });
};

export const fetchAllTransactions = async (userId, skip, batchSize)=>{
  return await prisma.transaction.findMany({
    where: { userId },
    skip,
    take: batchSize,
    orderBy: {
      id: 'desc'
    }
  });
};

export const getTotalTransactions = async (userId)=>{
  return await prisma.transaction.count({
    where: { userId }
  });
};