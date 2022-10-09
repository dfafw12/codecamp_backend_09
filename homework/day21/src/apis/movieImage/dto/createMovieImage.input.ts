import { Field, InputType } from "@nestjs/graphql";
import { MovieInput } from "src/apis/movies/dto/movie.input";

@InputType()
export class CreateMovieImageInput {
  @Field(() => String)
  url: string;

  @Field(() => Boolean)
  isMain: boolean;

  @Field(() => String)
  movieId: string;
}
