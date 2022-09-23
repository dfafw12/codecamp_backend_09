import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStarbucksInput } from './entity/dto/createStarbucks.input';
import { Starbucks } from './entity/starbucks.entity';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.data();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args({ name: 'createStarbucksInput', nullable: true })
    createStarbucksInput: CreateStarbucksInput,
  ) {
    return this.starbucksService.create({ createStarbucksInput });
  }
}
