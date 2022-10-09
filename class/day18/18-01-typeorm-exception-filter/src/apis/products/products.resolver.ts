// controller와 같음

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
  ) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.create({ createProductInput });
  }

  @Query(() => [Product])
  fetchProducts() {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') //
    productId: string,
  ) {
    return this.productsService.findOne({ productId });
  }
  // 목록 페이지 조회 할때는 fetchproducts
  // 목록 페이지에서 개별 페이지 들어갈때 fetchproduct
  //id를 조회하여 개별페이지로 들어감

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string, //
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매 완료가 되었는지 확인.
    await this.productsService.checkSoldout({ productId });

    // 확인인후 수정하기
    return this.productsService.update({ productId, updateProductInput });
  }
}
