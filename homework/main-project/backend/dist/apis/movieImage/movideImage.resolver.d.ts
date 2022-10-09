import { CreateMovieImageInput } from "./dto/createMovieImage.input";
import { MovieImage } from "./entities/movieImage.entity";
import { MovieImageService } from "./movieImage.service";
export declare class MovieImageResolver {
    private readonly movieImageService;
    constructor(movieImageService: MovieImageService);
    createMovieImage(createMovieImageInput: CreateMovieImageInput): Promise<any>;
    deleteMovieImage(movieImageId: string): Promise<boolean>;
    restoreMovieImage(movieImageId: string): Promise<boolean>;
    fetchMovieImages(): Promise<MovieImage[]>;
    fetchMovieImageWithDeleted(): Promise<MovieImage[]>;
    fetchMovieImage(movieImageId: string): Promise<MovieImage>;
}
