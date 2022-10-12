import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilesService } from "../files/files.service";
import { MovieGenre } from "../movieGenre/entities/movieGenre.entity";
import { MovieImage } from "../movieImage/entities/movieImage.entity";
import { MovieImageService } from "../movieImage/movieImage.service";
import { Movie } from "./entites/movie.entity";
import { MovieResolver } from "./movie.resolver";
import { MovieService } from "./movie.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Movie, //
      MovieGenre,
      MovieImage,
    ]),
  ],
  providers: [
    MovieResolver, //
    MovieService,
    FilesService,
    MovieImageService,
  ],
})
export class MovieModule {}
