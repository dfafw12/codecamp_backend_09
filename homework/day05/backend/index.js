import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import cors from "cors";

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

app.listen(3001, () => {
  console.log(`프로그램 켜짐`);
});
