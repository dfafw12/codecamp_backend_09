import { Module } from "@nestjs/common";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
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
    ElasticsearchModule.register({
      node: "http://elasticsearch:9200",
    }),
  ],
  providers: [
    MovieResolver, //
    MovieService,
    FilesService,
    MovieImageService,
  ],
})
export class MovieModule {}
