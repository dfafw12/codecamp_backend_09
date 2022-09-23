import { CashService } from "./services/cash.js";

export class CouponController {
  buyCoupon = (req, res) => {
    //1. 가진돈 검증코드 (10줄 정도 => 2줄)
    const cashService = new CashService();
    const hasMoney = cashService.checkValue();
    // 2. 쿠폰 구매 코드
    if (hasMoney) {
      res.send("쿠폰 구매 완료");
    }
  };
}
