import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { IOAuthUser } from "src/commons/types/context";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/login/google")
  @UseGuards(AuthGuard("google"))
  loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response
  ) {
    this.authService.isUser({ res, req });
  }

  @Get("/login/naver")
  @UseGuards(AuthGuard("naver"))
  loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response
  ) {
    this.authService.isUser({ res, req });
  }

  @Get("/login/kakao")
  @UseGuards(AuthGuard("kakao"))
  loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response
  ) {
    this.authService.isUser({ res, req });
  }
}
