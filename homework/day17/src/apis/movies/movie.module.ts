import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "./entites/movie.entity";
import { MovieResolver } from "./movie.resolver";
import { MovieService } from "./movie.service";

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [
    MovieResolver, //
    MovieService,
  ],
})
export class MovieModule {}
