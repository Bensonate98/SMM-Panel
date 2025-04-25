import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const emailHost = process.env.EMAIL_HOST;
export const emailPort = process.env.EMAIL_PORT;
export const emailUser = process.env.EMAIL_USER;
export const emailPassword = process.env.EMAIL_PASSWORD;
export const accessSecret = process.env.JWT_ACCESS_SECRET;
export const refreshSecret = process.env.JWT_REFRESH_SECRET;
export const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
export const AppURL = process.env.APP_URL;




