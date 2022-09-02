import { getToDay } from "./utils.js";

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

export function sendEmail(myEmail, result) {
  console.log(`${myEmail} 이메일로 가입환영 템플릿  ${result} 를 전송합니다.`);
}
