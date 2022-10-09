import { Movie } from "../entites/movie.entity";
declare const MovieInput_base: import("@nestjs/common").Type<Omit<Movie, "id">>;
export declare class MovieInput extends MovieInput_base {
}
export {};
