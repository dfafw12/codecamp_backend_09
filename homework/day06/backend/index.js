import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import cors from "cors";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import { getWelcomeTemplate, sendEmail } from "./email.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/users", (req, res) => {
  const result = [
    {
      email: "aa222a@gmail.com",
      name: "철수",
      phone: "010-2224-5678",
      personal: "220230-2622222",
      prefer: "https://naver.com",
    },
    {
      email: "aa11111a@gmail.com",
      name: "영희",
      phone: "010-3234-5878",
      personal: "264110-2222522",
      prefer: "https://nate.com",
    },
    {
      email: "aaazzaa@gmail.com",
      name: "짱구",
      phone: "010-4254-1678",
      personal: "220110-2222242",
      prefer: "https://naver.com",
    },
    {
      email: "aa55555a@gmail.com",
      name: "훈이",
      phone: "010-5234-5672",
      personal: "220110-2222232",
      prefer: "https://google.com",
    },
    {
      email: "aa6666a@gmail.com",
      name: "맹구6",
      phone: "010-6234-5673",
      personal: "220110-2222212",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  const result = [
    { name: "아메리카노", kcal: 1 },
    { name: "프라푸치노", kcal: 2 },
    { name: "캬라멜마끼야또", kcal: 3 },
    { name: "아이스티", kcal: 4 },
    { name: "카푸치노", kcal: 5 },
    { name: "쉐이크", kcal: 6 },
    { name: "이거커피", kcal: 7 },
    { name: "저거커피", kcal: 8 },
    { name: "요거커피", kcal: 9 },
    { name: "암튼커피", kcal: 10 },
  ];
  res.send(result);
});

app.post("/phone", (req, res) => {
  // 1. 휴대폰 번호 자릿수 체크
  console.log("!!!!!!");

  const myPhone = req.body.myPhone;
  console.log(myPhone + ": myPhone");
  const isValid = checkPhone(myPhone);
  if (isValid === false) {
    return;
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken(); // 111111

  // 3. 핸드폰번호에 토큰 전송하기.
  sendTokenToSMS(myPhone, myToken);

  res.send("인증완료");
});

app.post("/email", (req, res) => {
  // const name = req.body.name;
  // const age = req.body.age;
  // const school = req.body.school;
  // const email = req.body.email;

  const { name, myPhone, page, email } = req.body; // 위에 4줄과 같은 뜻

  // 1. 이메일이 정상인지 확인.(1-존재여부,2-@가 포함여부)

  console.log(email + ": email");
  // const isValid = checkEmail(email);
  // if (isValid === false) {
  //   return;
  // }
  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, myPhone, page, email });
  // 3. 이메일에 가입한 템플릿 전송하기.
  sendEmail(email, myTemplate);
  res.send("가입완료.");
});

app.listen(3001, () => {
  console.log(`프로그램 켜짐`);
});
