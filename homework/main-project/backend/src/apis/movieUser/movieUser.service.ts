import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
// import { Movie } from "../movies/entites/movie.entity";
import { User } from "../users/entities/user.entity";
import {
  MovieUser,
  MOVIE_USER_ISPAYMENT_ENUM,
} from "./entities/movieUser.entity";

@Injectable()
export class MovieUserService {
  constructor(
    @InjectRepository(MovieUser)
    private readonly movieUserRepository: Repository<MovieUser>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // @InjectRepository(Movie) // private readonly movieRepository: Repository<Movie>
    private readonly dataSource: DataSource
  ) {}

  async create({
    impUid,
    amount,
    user: _user,
    isPayment = MOVIE_USER_ISPAYMENT_ENUM.PAYMENT /*movie: _movie*/,
  }) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction("SERIALIZABLE");
    try {
      const movieUser = this.movieUserRepository.create({
        impUid: impUid,
        amount: amount,
        user: _user,
        isPayment,
      });

      // throw new Error("error!");
      console.log(movieUser);
      // await this.movieUserRepository.save(movieUser);
      queryRunner.manager.save(movieUser);

      // const user = await this.userRepository.findOne({
      //   where: {
      //     id: _user.id,
      //   },
      // });

      const user = await queryRunner.manager.findOne(User, {
        where: {
          id: _user.id,
        },
        lock: { mode: "pessimistic_write" },
      });

      // this.userRepository.update(
      //   { id: _user.id },
      //   { point: user.point + amount }
      // );
      const updateUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });

      await queryRunner.manager.save(updateUser);

      await queryRunner.commitTransaction();

      return movieUser;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async checkDuplicate({ impUid }) {
    const result = await this.movieUserRepository.findOne({
      where: { impUid },
    });
    if (result) {
      throw new UnprocessableEntityException("이미 결제된 내역");
    }
  }

  async findOne({ impUid }) {
    const result = await this.movieUserRepository.findOne({
      where: { impUid },
    });
    return result;
  }

  async cancel({ impUid, amount, user: _user, isPayment }) {
    const movieUser = await this.create({
      impUid,
      amount: -amount,
      user: _user,
      isPayment: MOVIE_USER_ISPAYMENT_ENUM.CANCEL,
    });
    // console.log(amount);
    return movieUser;
  }
}
