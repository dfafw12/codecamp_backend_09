// import { ProductService } from "./services/product";
import { PointService } from "./services/point.js";

export class CouponController {
  pointService;
  productService;

  constructor(pointService, productService) {
    this.pointService = pointService;
    this.productService = productService;
  }

  buyCoupon = (req, res) => {
    //1. 가진돈 검증코드 (10줄 정도 => 2줄)
    console.log("!!!!!!!!!");
    7;
    const pointService = new PointService();
    const hasMoney = pointService.checkValue();
    // 2. 쿠폰 구매 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료");
    }
  };
}
