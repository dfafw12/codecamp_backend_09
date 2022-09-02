// const express = require("express");
import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("게시물 등록에 성공했습니다.");
});

// app.post("/qqq",function(req,res){

// })

app.listen(3000, () => {
  console.log("프로그램을 켜는데 성공했어요.");
});
//app.listen(포트번호) 24시간 계속 유지 시켜놓는다는 뜻
