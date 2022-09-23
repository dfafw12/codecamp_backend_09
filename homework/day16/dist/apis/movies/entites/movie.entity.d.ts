import { MovieTheater } from "src/apis/moveTheater/entities/movieTheater.entity";
import { MovieGenre } from "src/apis/movieGenre/entities/movieGenre.entity";
export declare class Movie {
    id: string;
    title: string;
    summary: string;
    open: string;
    isIng: boolean;
    movieGenres: MovieGenre[];
    movieTheaters: MovieTheater[];
}
