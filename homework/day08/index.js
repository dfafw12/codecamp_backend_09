import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import cors from "cors";
import "dotenv/config.js";
import mongoose from "mongoose";
import { Phone } from "./models/token.model.js";

const app = express();

app.use(cors());
app.use(express.json());

// const check = app.get("/tokens/phone", async function (req, res) {
//   const phone = req.body.phone;
//   const result = await Phone.find({ phone: phone });
//   //   console.log(result + ": result");

//   const data = result.map((row) => row.phone);

//   if (data == phone) {
//     res.send(true);
//     return true;
//   } else {
//     res.send(false);
//     return false;
//   }

//   //   res.send(result);
// });

app.post("/tokens/phone", async (req, res) => {
  //  휴대폰 번호 자릿수 체크
  console.log(req.body);
  const phone = req.body.phone;
  const isValid = checkPhone(phone);
  if (isValid === false) {
    return;
  }

  //  핸드폰 토큰 6자리 만들기
  const myToken = getToken(); // 111111

  const phoneToken = new Phone({
    token: myToken,
    phone: req.body.phone,
    isAuth: false,
  });

  let data = await Phone.findOne({ phone });

  const phone1 = phone.substring(0, 3);
  const phone2 = phone.substring(3, 7);
  const phone3 = phone.substring(7);

  if (data === null) {
    phoneToken.save();
    //  핸드폰번호에 토큰 전송하기.
    // sendTokenToSMS(phone, myToken);
    res.send(`${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다1.`);
  } else if (data.phone != phone) {
    res.send(`${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다2.`);
    //  핸드폰번호에 토큰 전송하기.
    // sendTokenToSMS(phone, myToken);
    phoneToken.save();
  } else {
    //  핸드폰번호에 토큰 전송하기.
    // sendTokenToSMS(phone, myToken);
    console.log(myToken, ": myToken");
    await Phone.updateOne({ phone: phone }, { token: myToken, isAuth: false });
    res.send(`${phone1}-${phone2}-${phone3}으로 인증 문자가 전송되었습니다3.`);
  }
});

app.patch("/tokens/phone", async (req, res) => {
  const phone = req.body.phone;
  const token = req.body.token;

  let data = await Phone.findOne({ phone });
  // console.log(data.token);
  // console.log(data.isAuth);

  if (data == null) {
    console.log("null임");
    res.send(false);
  } else if (data.phone == phone && data.token == token) {
    await Phone.updateOne({ phone: phone }, { isAuth: true });
    res.send(true);
  } else {
    console.log("토큰 틀림");
    res.send(false);
  }
});

// 몽고DB 접속
mongoose.connect("mongodb://my-database:27017/myDocker01");

app.listen(3000, () => {
  console.log("프로그램을 켜는데 성공했어요1.");
});
