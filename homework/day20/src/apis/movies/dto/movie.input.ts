import { InputType, OmitType } from "@nestjs/graphql";
import { Movie } from "../entites/movie.entity";

@InputType()
export class MovieInput extends OmitType(Movie, ["id"], InputType) {}
