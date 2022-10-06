import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IamportService } from "../iamport/iamport.service";
import { User } from "../users/entities/user.entity";
import { MovieUser } from "./entities/movieUser.entity";
import { MovieUserResolver } from "./movieUser.resolver";
import { MovieUserService } from "./movieUser.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MovieUser, //
      User,
    ]),
  ],
  providers: [
    IamportService,
    MovieUserService, //
    MovieUserResolver,
  ],
})
export class MovieUserModule {}
