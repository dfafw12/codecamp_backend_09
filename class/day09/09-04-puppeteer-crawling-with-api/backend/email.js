import { getToDay } from "./utils.js";
import nodemailer from "nodemailer";

export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("이메일을 형식이 올바르지 않습니다.");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const myTemplate = `
          <html>
            <body>
                <h1>
                  ${name}님의 가입을 환영합니다.
                </h1>
                </hr>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${getToDay()}</div>
            </body>
          </html>
          `;
  return myTemplate;
}

export async function sendEmail(myEmail, result) {
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
    subject: "가입을 축하",
    html: result,
  });

  console.log(response);
  // console.log(`${myEmail} 이메일로 가입환영 템플릿  ${result} 를 전송합니다.`);
}
