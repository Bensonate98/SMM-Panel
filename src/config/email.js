import nodemailer from "nodemailer";
import { emailHost, emailPort, emailUser, emailPassword } from "./secrets.js"


const transporter = nodemailer.createTransport({
  host: emailHost,
  port: emailPort,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPassword
  }
});

export default transporter;