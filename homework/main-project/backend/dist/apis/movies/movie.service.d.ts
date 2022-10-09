import { Repository } from "typeorm";
import { MovieGenre } from "../movieGenre/entities/movieGenre.entity";
import { Movie } from "./entites/movie.entity";
export declare class MovieService {
    private readonly movieRepository;
    private readonly movieGenreRepository;
    constructor(movieRepository: Repository<Movie>, movieGenreRepository: Repository<MovieGenre>);
    create({ createMovieInput }: {
        createMovieInput: any;
    }): Promise<any>;
    findOne({ movieId }: {
        movieId: any;
    }): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    update({ movieId, updateMovieInput }: {
        movieId: any;
        updateMovieInput: any;
    }): Promise<any>;
}
