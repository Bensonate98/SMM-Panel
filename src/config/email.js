import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'bensonchristopher84@gmail.com',
    pass: 'awou aisu awwq nhcw'
  }
});

export default transporter;