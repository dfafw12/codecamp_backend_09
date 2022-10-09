import { CreateMovieInput } from "./dto/createMovie.input";
import { UpdateMovieInput } from "./dto/updateMovie.input";
import { Movie } from "./entites/movie.entity";
import { MovieService } from "./movie.service";
export declare class MovieResolver {
    private readonly movieService;
    constructor(movieService: MovieService);
    fetchMovies(): Promise<Movie[]>;
    fetchMovie(movieId: string): Promise<Movie>;
    createMovie(createMovieInput: CreateMovieInput): Promise<any>;
    UpdateMovie(movieId: string, updateMovieInput: UpdateMovieInput): Promise<any>;
}
