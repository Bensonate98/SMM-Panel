import prisma from "../config/db.js";

export const fetchUser = async (userId)=>{
  return await prisma.user.findUnique({where:{
    id: userId
  }})
}