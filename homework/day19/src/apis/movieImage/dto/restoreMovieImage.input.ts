import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateMovieImageInput } from "./createMovieImage.input";

@InputType()
export class ResotreMovieImageInput extends PartialType(
  CreateMovieImageInput
) {}
