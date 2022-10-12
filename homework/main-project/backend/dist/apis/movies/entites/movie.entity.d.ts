import { MovieTheater } from "src/apis/moveTheater/entities/movieTheater.entity";
import { MovieGenre } from "src/apis/movieGenre/entities/movieGenre.entity";
import { MovieImage } from "src/apis/movieImage/entities/movieImage.entity";
export declare class Movie {
    id: string;
    title: string;
    summary: string;
    open: string;
    isIng: boolean;
    files: MovieImage[];
    movieGenres: MovieGenre[];
    movieTheaters: MovieTheater[];
}
