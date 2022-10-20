// index.js 와 같음

import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productSalselocations/entities/productSaleslocation.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';

import { Product } from './entities/product.entity';
import { ProductSubscriber } from './entities/product.subscriber';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductSaleslocation,
      ProductTag,
    ]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    ProductsResolver, //
    ProductsService,
    ProductSubscriber,
  ],
})
export class ProductsModule {}
