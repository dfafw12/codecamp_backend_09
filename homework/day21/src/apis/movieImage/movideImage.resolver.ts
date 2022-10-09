import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateMovieImageInput } from "./dto/createMovieImage.input";
import { ResotreMovieImageInput } from "./dto/restoreMovieImage.input";
import { MovieImage } from "./entities/movieImage.entity";
import { MovieImageService } from "./movieImage.service";

@Resolver()
export class MovieImageResolver {
  constructor(private readonly movieImageService: MovieImageService) {}

  @Mutation(() => MovieImage)
  createMovieImage(
    @Args("createMovieImageInput") createMovieImageInput: CreateMovieImageInput
  ) {
    return this.movieImageService.create({ createMovieImageInput });
  }

  @Mutation(() => Boolean)
  deleteMovieImage(@Args("movieImageId") movieImageId: string) {
    return this.movieImageService.delete({ movieImageId });
  }
  @Mutation(() => Boolean)
  restoreMovieImage(@Args("movieImageId") movieImageId: string) {
    return this.movieImageService.restore({
      movieImageId,
    });
  }

  @Query(() => [MovieImage])
  fetchMovieImages() {
    return this.movieImageService.findAll();
  }

  @Query(() => [MovieImage])
  fetchMovieImageWithDeleted() {
    return this.movieImageService.findDelete();
  }

  @Query(() => MovieImage)
  fetchMovieImage(
    @Args("movieImageId") //
    movieImageId: string
  ) {
    return this.movieImageService.findOne({ movieImageId });
  }
}
