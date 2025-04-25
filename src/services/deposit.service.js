import prisma from "../config/db.js";

export const saveDeposit = async (amount, userId)=>{
  return await prisma.deposit.create({
    data:{
      amount: parseFloat(amount),
      reference: `ref_${userId}${Date.now()}`,
      user: { connect: { id: userId } }
    }
  });
}

export const fetchDeposit = async (reference)=>{
  return await prisma.deposit.findUnique({
    where:{ reference }
  });
};

export const updateDepositStatus = async (reference, status)=>{
  return await prisma.deposit.update({
    where: { reference },
    data: { status }
  });
};

export const getDepositHistory = async (userId, skip, batchSize)=>{
  return await prisma.deposit.findMany({
    where: { userId },
    skip,
    take: batchSize,
    orderBy: {
      id: 'desc'
    }
  });
}

export const getTotalDeposit = async (userId)=>{
  return await prisma.deposit.count({
    where: { userId }
  });
}

export const getDepositHistoryByStatus = async (userId, status, skip, batchSize)=>{
  return await prisma.deposit.findMany({
    where:{ userId, status },
    skip,
    take: batchSize,
    orderBy: {
      id: "desc"
    }
  });
}

export const getTotalDepositByStatus = async (userId, status)=>{
  return await prisma.deposit.count({
    where: { userId, status }
  });
}

