// controller와 같음

import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  // @Mutation(() => Product)
  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    //엘라스틱 서치에 등록하기 연습
    // await this.elasticsearchService.create({
    //   id: 'myid5',
    //   index: 'myproduct09',
    //   document: {
    //     name: '철수',
    //     age: 13,
    //     school: '다람쥐초등학교.',
    //     ...createProductInput,
    //   },
    // });
    // return '엘라스틱 서치에 등록완료.';
    // 엘라스틱 서치에 등록해보기 위해 임시로 주석
    return this.productsService.create({ createProductInput });
  }

  // @Query(() => [Product])
  @Query(() => String)
  async fetchProducts(
    @Args({ name: 'search', nullable: true }) search: string,
  ) {
    const result = await this.elasticsearchService.search({
      index: 'myproduct0999',
      query: {
        match: { description: search }, // 일반적인 nGram 검색방법
        // wildcard: { description: `*${search}*` }, // nGram 없이 검색 가능하지만, 성능이 느림
      },
    });

    console.log(JSON.stringify(result, null, ' '));
    return '엘라스틱서치에서 조회 완료.';
    // 엘라스틱 서치에서 조회 해보기 위해 임시 주석
    // return this.productsService.findAll();
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

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productsService.delete({ productId });
  }
}
