import {
  CACHE_MANAGER,
  Inject,
  UnauthorizedException,
  UnprocessableEntityException,
  UseGuards,
} from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "../users/user.service";
import { AuthService } from "./auth.service";
import * as bcrypt from "bcrypt";
import { IContext } from "src/commons/types/context";
import {
  GqlAuthAccessGuard,
  GqlAuthRefreshGuard,
} from "src/commons/auth/gql-auth.guard";
import * as jwt from "jsonwebtoken";
import { Cache } from "cache-manager";
import { access } from "fs";
import { authorize } from "passport";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
    private readonly userService: UserService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  @Mutation(() => String)
  async login(
    @Args("userEmail") userEmail: string,
    @Args("password") password: string,
    @Context() context: IContext
  ) {
    const user = await this.userService.findOne({ userEmail });

    if (!user) {
      throw new UnprocessableEntityException("이메일이 존재하지 않습니다.");
    }

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth)
      throw new UnprocessableEntityException("비밀번호가 틀렸습니다.");

    this.authService.setRefreshToken({ user, res: context.res });

    return this.authService.getAccessToken({ user });
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(@Context() context: IContext) {
    console.log(context.req.user, "@@@@@@@@@@@@@@@");
    return this.authService.getAccessToken({ user: context.req.user });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async logout(@Context() context: IContext) {
    //

    const getAccessToken = context.req.headers["authorization"].replace(
      "Bearer ",
      ""
    );

    const getRefreshToken = context.req.headers["cookie"].replace(
      "refreshToken=",
      ""
    );

    // console.log(getAccessToken, ": accessToken");
    // console.log(getRefreshToken, ": refreshToken");

    try {
      const DecodeAccessToken = jwt.verify(getAccessToken, "myAccessKey");
      const DecodeRefreshToken = jwt.verify(getRefreshToken, "myRefreshKey");
      // console.log(DecodeAccessToken, " : decodeAcc");
      // console.log(DecodeRefreshToken, " : decodeRefresh");

      await this.cacheManager.set(
        `refreshToken:${getRefreshToken}`,
        "refreshToken",
        {
          ttl: 180,
        }
      );

      await this.cacheManager.set(
        `accessToken:${getAccessToken}`,
        "accessToken",
        {
          ttl: 180,
        }
      );

      return "로그아웃 성공";
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException();
    }
  }
}
