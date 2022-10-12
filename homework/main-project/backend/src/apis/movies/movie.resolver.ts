import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MovieImageService } from "../movieImage/movieImage.service";
import { CreateMovieInput } from "./dto/createMovie.input";
import { UpdateMovieInput } from "./dto/updateMovie.input";
import { Movie } from "./entites/movie.entity";
import { MovieService } from "./movie.service";

@Resolver()
export class MovieResolver {
  constructor(
    private readonly movieService: MovieService, // // private readonly movieImageService: MovieImageService // private readonly filesService: FilesService
    private readonly movieimageService: MovieImageService
  ) {}
  @Query(() => [Movie])
  fetchMovies() {
    return this.movieService.findAll();
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
