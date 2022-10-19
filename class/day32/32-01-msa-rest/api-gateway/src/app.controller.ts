import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE')
    private readonly clientAuthService: ClientProxy,

    @Inject('RESOURCE_SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}

  // @Get('/products/buy')
  // buyProduct(): string {
  //   return this.appService.getHello();
  // }

  @Get('/auth/login')
  login() {
    // auth-service로 트래픽 넘겨주기
    return this.clientAuthService.send(
      // qqq는 단지 실습용. 보통은 cmd: 'login' 이렇게 표현
      { qqq: '로그인실행' },
      { email: 'qwe@qwe123.com', password: 'qwe123' },
    );
  }

  @Get('/boards')
  fetchBoards() {
    // resource-service로 트래픽 넘겨주기
    return this.clientResourceService.send({ cmd: 'fetchBoards' }, {});
  }
}
