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

  @MessagePattern({ cmd: 'fetchBoards' })
  fetchBoards() {
    //실제 데이터 조회
    return '게시글 데이터 보내줌';
  }
}
