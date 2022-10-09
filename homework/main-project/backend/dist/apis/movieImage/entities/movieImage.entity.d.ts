import { Movie } from "src/apis/movies/entites/movie.entity";
export declare class MovieImage {
    id: string;
    url: string;
    isMain: boolean;
    movie: Movie;
    deleteAt: Date;
}
