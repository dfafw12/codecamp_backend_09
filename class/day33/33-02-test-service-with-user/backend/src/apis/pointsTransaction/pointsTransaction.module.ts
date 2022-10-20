import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { PointTransaction } from './entites/pointTransaction.entity';
import { PointsTransactionResolver } from './pointsTransaction.resolver';
import { PointsTransactionService } from './pointsTransaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointTransaction, //
      User,
    ]),
  ],
  providers: [
    PointsTransactionResolver, //
    PointsTransactionService,
  ],
})
export class PointsTransactionModule {}
