import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../users/user.service';
import * as bycrypt from 'bcrypt';
import { AuthService } from './autu.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
  ) {
    // 1.이메일이 일치하는 유저를 DB에서 찾기
    const user = await this.userService.findOne({ email });
    // 2. 일치하는 유저가 없으면 에러 던지기
    if (!user) {
      throw new UnprocessableEntityException('이메일이 존재하지않습니다.');
    }

    // 3. 일치하는 유저가 있지만 비밀번호가 틀리다면 에러 던지기
    // compare(입력된값,db에저장되어있는값)
    const isAuth = await bycrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. 일치하는 유저도 있고 비밀번호도 맞았다면 => accessToken(=JWT)
    // accessToken 만들어서 브라우저에 전달.
    return this.authService.getAccessToken({ user });
  }
}
