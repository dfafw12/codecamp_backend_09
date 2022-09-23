import { options } from "./swagger/config.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import cors from "cors";
import { checkEmail, getWelcomeTemplate, sendEmail } from "./email.js";
import "dotenv/config.js";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";
import { Stock } from "./models/stock.model.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));
app.use(cors());
app.use(express.json()); // 설정 기능 use를 가지고 api를 만들수있다. express.json()로 모든 app들이 json데이터를 읽을수있게 만든다.
app.get("/boards", async function (req, res) {
  //1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // const result = [
  //   { number: 1, writer: "철수", title: "제목입니다1", content: "내용1" },
  //   { number: 2, writer: "영희", title: "제목입니다2", content: "내용2" },
  //   { number: 3, writer: "훈이", title: "제목입니다3", content: "내용3" },
  // ];
  const result = await Board.find();

  res.send(result);
});

app.post("/boards", async function (req, res) {
  //1. 브라우저에서 보내준 데이터 확인하기.
  console.log(req.body);

  //2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    content: req.body.content,
  });

  board.save();

  //3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답 주기
  await res.send("게시물 등록 성공!");
});

app.post("/tokens/phone", (req, res) => {
  // 1. 휴대폰 번호 자릿수 체크
  console.log(req.body);
  const myPhone = req.body.myPhone;
  const isValid = checkPhone(myPhone);
  if (isValid === false) {
    return;
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const myToken = getToken(); // 111111

  // 3. 핸드폰번호에 토큰 전송하기.
  sendTokenToSMS(myPhone, myToken);

  res.send("인증완료!!!!!!!");
});

app.post("/users", (req, res) => {
  // const name = req.body.name;
  // const age = req.body.age;
  // const school = req.body.school;
  // const email = req.body.email;

  const { name, age, school, email } = req.body; // 위에 4줄과 같은 뜻

  // 1. 이메일이 정상인지 확인.(1-존재여부,2-@가 포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) {
    return;
  }
  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, age, school });
  // 3. 이메일에 가입한 템플릿 전송하기.
  sendEmail(email, myTemplate);
  res.send("가입완료.");
});

app.get("/stocks", async (req, res) => {
  const stocks = await Stock.find();

  res.send(stocks);
});

// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/mydocker04");

//몽고DB 로그!
mongoose.set("debug", true);

// Backend API Server Open
app.listen(3000, () => {
  console.log("프로그램을 켜는데 성공했어요2@@@112233");
});
