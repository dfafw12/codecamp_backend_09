import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ProductSaleslocationInput } from 'src/apis/productSalselocations/dto/productSaleslocation.input';
import { ProductSaleslocation } from 'src/apis/productSalselocations/entities/productSaleslocation.entity';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => ProductSaleslocationInput)
  productSaleslocationInput: ProductSaleslocationInput;
}
