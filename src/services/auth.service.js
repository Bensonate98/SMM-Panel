import prisma from "../config/db.js";
import { encryptPassword, comparePassword, generateAccesToken, generateRefreshToken } from "../util/helper.js";

export const createUser = async (firstname, lastname, email, password)=>{
  const hashedPassword = await encryptPassword(password);
    const user = await prisma.user.create({
      data:{
        firstname,
        lastname,
        email,
        password: hashedPassword,
      }
    });
    const accessToken = generateAccesToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    return {user, accessToken, refreshToken};
};


export const loginUser = async (email, password) => {
 const user = await prisma.user.findFirst({
    where: { email }
  });
  if(!user){
    throw Error("invalid user");
  }
  const match = await comparePassword(password, user.password);
  if(!match){
    throw Error("invalid user");
  }
  const accessToken = generateAccesToken(user.id);
  const refreshToken = generateRefreshToken(user.id);
  return { user, accessToken, refreshToken };
};

export const saveRefreshToken = async (refreshToken, userId)=>{
  return await prisma.token.create({
    data:{
      refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      userId: userId
    }
  })
};

export const findRefreshToken = async (token)=>{
  return await prisma.token.findFirst({
    where:{ refreshToken: token },
    include: { user: true }
  })
};

export const deleteRefreshToken = async (refreshToken)=>{
  return await prisma.token.deleteMany({
    where: { refreshToken }
  })
}