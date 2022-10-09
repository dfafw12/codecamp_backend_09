// 기존 service

import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  create({ createProductInput }) {
    const result = this.productsRepository.save({
      ...createProductInput,

      // 하나하나 직접 나열하는 방식
      // name: '마우스',
      // description: '좋은',
      // price: 3000,
    });
    return result;
  }
  // async await 하든 안하든 상관없음
  // 이유는 ? 브라우저에 나갈때는 무조건 기달렸다가 나가기 때문.
  findAll() {
    return this.productsRepository.find();
  }

  findOne({ productId }) {
    return this.productsRepository.findOne({ where: { id: productId } });
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
}
