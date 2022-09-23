import { getToDay } from "./utils.js";
import nodemailer from "nodemailer";
import "dotenv/config.js";

export class EmailService {
  checkEmail = (email) => {
    if (email === undefined || email.includes("@") === false) {
      console.log("이메일을 형식이 올바르지 않습니다.");
      return false;
    } else {
      return true;
    }
  };

  getWelcomeTemplate = ({ name, email, phone, prefer }) => {
    const myTemplate = `
            <html>
              <body>
                  <h1>
                    ${name}님의 가입을 환영합니다.
                  </h1>
                  </hr>
                  <div>이름 : ${name}</div>
                  <div>이메일 : ${email}</div>
                  <div>핸드폰 : ${phone}</div>
                  <div>좋아하는사이트 : ${prefer}</div>
                  <div>가입일 : ${getToDay()}</div>
              </body>
            </html>
            `;
    return myTemplate;
  };

  sendEmail = async (myEmail, result) => {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    const response = await transporter.sendMail({
      from: EMAIL_USER,
      to: myEmail,
      subject: "가입을 축하합니다",
      html: result,
    });

    console.log(response);
  };
}
