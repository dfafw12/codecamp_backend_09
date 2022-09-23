import express from "express";

const app = express();

// 상품 구매하기 API
app.get("/products/buy", (req, res) => {
  // 1. 가진돈 검증코드 (10줄 정도)
  //
  // 2. 판매여부 검증코드 (10줄 정도)
  //
  // 3. 상품구매 코드
  //  if(돈b && !팔림){
  //      res.send("구매성공")
  // }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증코드 (10줄 정도)
  //
  // 2. 상품 환불코드
  // if(판매완료){
  //    res.send("환불완료")
  // }
  //
});
