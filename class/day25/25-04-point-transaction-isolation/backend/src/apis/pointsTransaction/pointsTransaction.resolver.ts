import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';
import { PointTransaction } from './entites/pointTransaction.entity';
import { PointsTransactionService } from './pointsTransaction.service';

@Resolver()
export class PointsTransactionResolver {
  constructor(
    private readonly pointTransactionService: PointsTransactionService,
  ) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => PointTransaction)
  createPointTransaction(
    @Args('impUid') impUid: string,
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext,
  ) {
    const user = context.req.user;
    return this.pointTransactionService.create({ impUid, amount, user });
  }
}
