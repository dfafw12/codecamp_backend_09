import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/createBoard.input';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject } from '@nestjs/common';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // @Query(() => String, { nullable: true })
  // getHello(): string {
  //   return this.boardsService.qqq();
  // }

  // @Query(() => [Board])
  @Query(() => String)
  async fetchBoards() {
    const myCache = await this.cacheManager.get('aaa');

    console.log(myCache);
    return '캐쉬에서 조회 완료.';
    // redis 연습을 위해 잠시 주석.
    // return this.boardsService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') content : string,

    @Args({ name: 'createBoardInput', nullable: true })
    createBoardInput: CreateBoardInput,
  ) {
    // 1. 캐시에 등록하는 연습.
    await this.cacheManager.set('aaa', createBoardInput, {
      ttl: 0,
    });
    // ttl: 0 은 시간 무제한
    return '캐쉬 에 등록 완료.';
    // 레디스 연습을 위해 잠시 주석
    // return this.boardsService.create({ createBoardInput });
  }
}
