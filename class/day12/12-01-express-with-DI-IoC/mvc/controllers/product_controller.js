import { ProductService } from "./services/product.js";
import { CashService } from "./services/cash.js";

export class ProductController {
  cashService;
  productService;

  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    // 1. 가진돈 검증코드 (10줄 정도 => 2줄)

    const cashService = new CashService();
    const hasMoney = cashService.checkValue();

    // 2. 판매여부 검증코드 (10줄 정도 => 2줄)
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldOut();

    // 3. 상품구매 코드
    if (hasMoney && !isSoldOut) {
      res.send("구매완료");
    }
  };
  refundProduct = (req, res) => {
    // 1. 판매여부 검증코드 (10줄 정도 => 2줄)
    const productService = new ProductService();
    const isSoldOut = productService.checkSoldOut();

    // 2. 상품 환불코드
    if (isSoldOut) {
      res.send("환불완료");
    }
  };
  //
}
