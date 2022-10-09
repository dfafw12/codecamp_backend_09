// 기존 service

import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productSalselocations/entities/productSaleslocation.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // const result = this.productsRepository.save({
    //   ...createProductInput,

    // 하나하나 직접 나열하는 방식
    // name: '마우스',
    // description: '좋은',
    // price: 3000,
    // });
    //=====================

    // 상품과 상품거래위치를 같이 등록하는 경우
    const { productSaleslocationInput, ...product } = createProductInput;

    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocationInput,
    });

    // 두 결과 합치기.
    const result2 = await this.productsRepository.save({
      ...product,
      productSaleslocation: result,
    });
    // result 통째로 넣기 vs id만 빼서 넣기 {id:result.id} ex),프론트에서 등록결과를 saleslocation까지 모두 받을수없음.

    // 최종결과 돌려주기.
    return result2;
  }
  // async await 하든 안하든 상관없음
  // 이유는 ? 브라우저에 나갈때는 무조건 기달렸다가 나가기 때문.
  findAll() {
    return this.productsRepository.find({
      relations: ['productSaleslocationInput'],
    });
  }

  findOne({ productId }) {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocationInput'],
    });
  }

  async update({ productId, updateProductInput }) {
    // this.productsRepository.create(); 등록을 위한 빈 객체 만들기
    // this.productsRepository.insert(); 결과는 못 받는 등록 방법
    // this.productsRepository.update(); 결과는 못 받는 수정방법

    // 수정 후 수정되지 않은 다른 결과 값 까지 모두 받고 싶을 때 사용

    const myProduct = await this.productsRepository.findOne({
      where: { id: productId },
    });

    const result = this.productsRepository.save({
      ...myProduct,
      id: productId,
      ...updateProductInput,
    });
    return result;
  }

  async checkSoldout({ productId }) {
    try {
      const product = await this.productsRepository.findOne({
        where: { id: productId },
      });
    } catch (error) {}

    // if (product.isSoldout) {
    //   throw new UnprocessableEntityException('완판된 상품');
    // }

    // if (product.isSoldout) {
    //   throw new HttpException('완판된 상품', HttpStatus.UNPROCESSABLE_ENTITY); // 422 라는뜻
    // }
  }

  async delete({ productId }) {
    // 1. 실제 삭제.
    // const result = this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 2. 소프트 삭제(직접 구현)  - isDeleted
    // this.productsRepository.update({ id: productId }, {isDeleted: true});

    //3. 소프트 삭제(직접 구현) - deletedAt
    // this.productsRepository.update({id : productId},{deletedAt: new Date()})

    // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productsRepository.softRemove({ id: productId }); // id로만 삭제가능

    // 5. 소프트 삭제 (TypeORM 제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId }); // 다른 컬럼으로도 삭제 가능
    return result.affected ? true : false;
  }
}
