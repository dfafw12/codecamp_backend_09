import express from "express";
import { ProductController } from "./mvc/controllers/product_controller.js";

const app = express();
const productController = new ProductController();

// 상품 API
app.post("/products/buy", productController.buyProduct); //상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API
// productController.refundProduct 뒤에 () 를 붙이면 실행을 하는거라 붙이면 안됌.
// productController.refundProduct 뒤에 () 를 붙이면 실행을 하는거라 붙이면 안됌.
