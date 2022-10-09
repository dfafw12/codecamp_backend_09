import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entites/pointTransaction.entity';

@Injectable()
export class PointsTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ impUid, amount, user: _user }) {
    // 1. PointTransaction 테이블에 거래기록 1줄 생성
    const pointsTransaction = this.pointsTransactionRepository.create({
      impUid: impUid,
      amount: amount,
      user: _user,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });
    await this.pointsTransactionRepository.save(pointsTransaction);

    // 2. 유저의 돈 찾기
    const user = await this.userRepository.findOne({ where: { id: _user.id } });

    // 3. 유저의 돈 업데이트
    this.userRepository.update(
      { id: _user.id },
      { point: user.point + amount },
    );
    // 4. 최종결과 프론트엔드에 돌려주기
    return pointsTransaction;
  }
}
