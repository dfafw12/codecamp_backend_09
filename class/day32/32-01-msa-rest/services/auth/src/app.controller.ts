import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/products/buy')
  // buyProduct(): string {
  //   return this.appService.getHello();
  // }

  // 이름 안맞춰 줘도됌.

  @MessagePattern({ qqq: '로그인실행' })
  login(data) {
    // 실제 로그인 하기
    console.log(data);
    return '로그인 성공';
  }

  logout() {
    // 로그아웃
  }

  restoreAccessToken() {
    //토큰 재발급
  }
}
