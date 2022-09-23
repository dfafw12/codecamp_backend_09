import { Repository } from "typeorm";
import { Movie } from "./entites/movie.entity";
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
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
