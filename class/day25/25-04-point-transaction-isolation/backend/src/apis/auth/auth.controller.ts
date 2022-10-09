import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UserService } from '../users/user.service';
import { AuthService } from './autu.service';

interface IOAuthUser {
  user?: {
    email: string;
    hashedPassword: string;
    name: string;
    age: number;
  };
}

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  //
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    // req.user.
    // 1. 가입확인
    let user = await this.userService.findOne({ email: req.user.email });

    // 2. 자동 회원가입(가입이 안돼있다면)
    if (!user) {
      user = await this.userService.create({ ...req.user });
    }
    // 3. 가입이 돼있다면 ? > 로그인(refreshToken , accessToken 만들어서 프론트엔드에 주기)
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://127.0.0.1:5501/class/day21/21-03-login-google/frontend/social-login.html',
    );
  }
}
