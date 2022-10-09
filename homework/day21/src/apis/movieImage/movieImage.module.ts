import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "../movies/entites/movie.entity";
import { MovieImage } from "./entities/movieImage.entity";
import { MovieImageResolver } from "./movideImage.resolver";
import { MovieImageService } from "./movieImage.service";

@Module({
  imports: [TypeOrmModule.forFeature([MovieImage, Movie])],
  providers: [
    MovieImageResolver, //
    MovieImageService,
  ],
})
export class MovieImageModule {}
