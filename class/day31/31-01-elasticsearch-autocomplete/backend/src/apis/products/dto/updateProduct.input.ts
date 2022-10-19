import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  //
}

// PickType(CreateProductInput, ['name', 'price']); 골라서 넣기
// OmitType(CreateProductInput, ['description']); 넣을것만 빼기
// PartialType(CreateProductInput) 있어도 없어도 상관없음(nullable)
