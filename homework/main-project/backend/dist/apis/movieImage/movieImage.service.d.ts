import { Repository } from "typeorm";
import { Movie } from "../movies/entites/movie.entity";
import { MovieImage } from "./entities/movieImage.entity";
export declare class MovieImageService {
    private readonly movieImageRepository;
    private readonly movieRepository;
    constructor(movieImageRepository: Repository<MovieImage>, movieRepository: Repository<Movie>);
    create({ createMovieImageInput }: {
        createMovieImageInput: any;
    }): Promise<any>;
    findAll(): Promise<MovieImage[]>;
    findDelete(): Promise<MovieImage[]>;
    findOne({ movieImageId }: {
        movieImageId: any;
    }): Promise<MovieImage>;
    delete({ movieImageId }: {
        movieImageId: any;
    }): Promise<boolean>;
    restore({ movieImageId }: {
        movieImageId: any;
    }): Promise<boolean>;
}
