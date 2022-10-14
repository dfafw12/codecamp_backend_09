import { CACHE_MANAGER, Inject } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Cache } from "cache-manager";
import { MovieImageService } from "../movieImage/movieImage.service";
import { CreateMovieInput } from "./dto/createMovie.input";
import { UpdateMovieInput } from "./dto/updateMovie.input";
import { Movie } from "./entites/movie.entity";
import { MovieService } from "./movie.service";

@Resolver()
export class MovieResolver {
  constructor(
    private readonly movieService: MovieService, // // private readonly movieImageService: MovieImageService // private readonly filesService: FilesService
    private readonly movieimageService: MovieImageService,
    private readonly elasticSearchService: ElasticsearchService,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {}

  @Query(() => [Movie])
  async fetchMovies(@Args("search") search: string) {
    const cacheData = await this.cacheManager.get(search);

    if (!cacheData) {
      //
      const searchElaData = await this.elasticSearchService.search({
        index: "myhomework",
        query: {
          match: { title: search },
        },
      });

      const elaResult = searchElaData.hits.hits[0]._source;

      await this.cacheManager.set(search, elaResult, {
        ttl: 600,
      });

      console.log(elaResult, ": elaResult");
      return [elaResult];
    } else {
      //
      const cacheResult = await this.cacheManager.get(search);
      console.log(cacheResult, " : cacheResult!");
      return [cacheResult];
    }

    // return this.movieService.findAll({ search });
  }

  @Query(() => Movie)
  fetchMovie(
    @Args("movieId")
    movieId: string
  ) {
    return this.movieService.findOne({ movieId });
  }

  @Mutation(() => Movie)
  async createMovie(
    @Args({ name: "createMovieInput", nullable: true }) //
    createMovieInput: CreateMovieInput
    // @Args({ name: "files", type: () => [GraphQLUpload] }) files: FileUpload[]
    // @Args({ name: "createMovieImageInput", nullable: true })
    // createMovieImageInput: CreateMovieImageInput
  ) {
    const result = await this.movieService.create({
      createMovieInput,
      /* createMovieImageInput,*/
    });

    return result;
  }

  @Mutation(() => Movie)
  async UpdateMovie(
    @Args("movieId") movieId: string,
    @Args("updateMovieInput") updateMovieInput: UpdateMovieInput
  ) {
    await this.movieService.deleteImg({ movieId });
    return await this.movieService.update({ movieId, updateMovieInput });
  }
}
