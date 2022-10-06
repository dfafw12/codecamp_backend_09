import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtRefreshStrategy } from "src/commons/auth/jwt-refresh.stratgy";
import { JwtGoogleStrategy } from "src/commons/auth/jwt-social.google.strategy";
import { JwtKakaoStrategy } from "src/commons/auth/jwt-social.kako.strategy";
import { JwtNaverStrategy } from "src/commons/auth/jwt-social.naver.strategy";
import { MovieUser } from "../movieUser/entities/movieUser.entity";
import { User } from "../users/entities/user.entity";
import { UserService } from "../users/user.service";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([User, MovieUser]),
  ],
  providers: [
    JwtKakaoStrategy,
    JwtNaverStrategy,
    JwtGoogleStrategy,
    JwtRefreshStrategy,
    AuthResolver, //
    AuthService,
    UserService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
