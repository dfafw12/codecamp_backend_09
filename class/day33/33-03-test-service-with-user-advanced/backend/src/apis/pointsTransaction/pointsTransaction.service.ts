import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
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

    private readonly dataSource: DataSource,
  ) {}

  async create({ impUid, amount, user: _user }) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    // ========= transaction start!! ========
    await queryRunner.startTransaction('SERIALIZABLE');
    //==================================================================
    try {
      // 1. PointTransaction 테이블에 거래기록 1줄 생성
      const pointsTransaction = this.pointsTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: _user,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      // throw new Error(' error');
      // await this.pointsTransactionRepository.save(pointsTransaction);
      queryRunner.manager.save(pointsTransaction);

      // 2. 유저의 돈 찾기
      // const user = await this.userRepository.findOne({
      //   where: { id: _user.id },
      // });
      // 2. 유저의 돈 찾기
      const user = await queryRunner.manager.findOne(User, {
        where: { id: _user.id },
        lock: { mode: 'pessimistic_write' },
      });
      // 3. 유저의 돈 업데이트
      // this.userRepository.update(
      //   { id: _user.id },
      //   { point: user.point + amount },
      // );

      // 3. 유저의 돈 업데이트
      const updateUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });

      await queryRunner.manager.save(updateUser);
      // await queryRunner.manager.save({
      //   ...user,
      //   point: user.point + amount,
      // })

      // --------- commit 성공 확정 ---------
      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointsTransaction;
    } catch (error) {
      // ============= rollback 되돌리기 =======
      await queryRunner.rollbackTransaction();
      // ===========================
    } finally {
      // -------- 연결해제-----
      await queryRunner.release();
    }
  }
}
