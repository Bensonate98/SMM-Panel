import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const emailHost = process.env.EMAIL_HOST;
export const emailPort = process.env.EMAIL_PORT;
export const emailUser = process.env.EMAIL_USER;
export const emailPassword = process.env.EMAIL_PASSWORD;
export const jwtSecret = process.env.JWT_SECRET;




