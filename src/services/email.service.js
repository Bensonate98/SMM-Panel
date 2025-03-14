import transporter from "../config/email.js";
import path from "path";
import ejs from "ejs"
import { fileURLToPath } from "url";


export const sendMail = async (to, subject, template, data)=>{
  try{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templatePath = path.join(__dirname, "../views/emails", `${template}.ejs`, )
    const html = await ejs.renderFile(templatePath, {user: data});

    const mailOptions = {
      from: '"Emboost" <bensonchristopher84@gmail.com>',
      to,
      subject,
      html
    }
    await transporter.sendMail(mailOptions)

  }
  catch(err){
    console.log(err);
  }
}

export default sendMail;