import {
  Req,
  Res,
  UnprocessableEntityException,
  UseGuards,
} from "@nestjs/common";
import { Args, Context, Int, Mutation, Resolver } from "@nestjs/graphql";
import { Request, Response } from "express";
import { GqlAuthAccessGuard } from "src/commons/auth/gql-auth.guard";
import { IContext } from "src/commons/types/context";
import { IamportService } from "../iamport/iamport.service";
import {
  MovieUser,
  MOVIE_USER_ISPAYMENT_ENUM,
} from "./entities/movieUser.entity";
import { MovieUserService } from "./movieUser.service";

@Resolver()
export class MovieUserResolver {
  constructor(
    private readonly movieUserService: MovieUserService,
    private readonly iamportService: IamportService
  ) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => MovieUser)
  async createMovieUser(
    @Args("impUid") impUid: string, //
    @Args({ name: "amount", type: () => Int }) amount: number,
    @Context() context: IContext
  ) {
    const movieUser = await this.movieUserService.findOne({ impUid });
    const token = await this.iamportService.getAccessToken();

    const userInfo = await this.iamportService.paymentInfo({
      impUid,
      amount,
      token,
    });
    // console.log(token);
    const user = context.req.user;

    if (!movieUser) {
      console.log(movieUser, ": createMovieUser movieUser");
      return this.movieUserService.create({ impUid, amount, user });
    } else {
      throw new UnprocessableEntityException("이미 결제한 건.");
    }
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => MovieUser)
  async cancelMovieUser(
    @Args("impUid") impUid: string,
    @Args({ name: "amount", type: () => Int }) amount: number,
    @Context() context: IContext
  ) {
    const user = context.req.user;
    console.log(amount, ": cancelMovieUser Cancel");
    console.log(impUid, ": cancelMovieUser impUid");
    const token = await this.iamportService.getAccessToken();
    const cancelAmount = await this.iamportService.cancelPayment({
      impUid,
      amount,
      token,
    });

    console.log(cancelAmount, ":cancelMovieUser cancelAmount");
    return await this.movieUserService.cancel({
      // impUid: cancelAmount[0],
      // amount: cancelAmount[1],
      impUid,
      amount,
      user,
      isPayment: MOVIE_USER_ISPAYMENT_ENUM.PAYMENT,
    });
  }
}
