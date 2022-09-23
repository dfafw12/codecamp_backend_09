import express from "express";
import { ProductController } from "./mvc/controllers/product_controller.js";
import { CouponController } from "./mvc/controllers/coupon_controller.js";
import { CashService } from "./mvc/controllers/services/cash.js";
import { ProductService } from "./mvc/controllers/services/product.js";
import { PointService } from "./mvc/controllers/services/point.js";

const app = express();

const cashService = new CashService();
const productService = new ProductService(); // 1. new 한번으로 모든곳에서 재활용 가능싱글톤 패턴
const pointService = new PointService(); // 2.  쿠폰 구매 방식이 포인트 결제로 변경됨(의존성주입!)

// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); //상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API
// productController.refundProduct 뒤에 () 를 붙이면 실행을 하는거라 붙이면 안됌.
// productController.refundProduct 뒤에 () 를 붙이면 실행을 하는거라 붙이면 안됌.

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);
