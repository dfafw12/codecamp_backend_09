import { Repository } from "typeorm";
import { FilesService } from "../files/files.service";
import { MovieGenre } from "../movieGenre/entities/movieGenre.entity";
import { MovieImage } from "../movieImage/entities/movieImage.entity";
import { Movie } from "./entites/movie.entity";
export declare class MovieService {
    private readonly movieRepository;
    private readonly movieGenreRepository;
    private readonly movieImageRepository;
    private readonly filesService;
    constructor(movieRepository: Repository<Movie>, movieGenreRepository: Repository<MovieGenre>, movieImageRepository: Repository<MovieImage>, filesService: FilesService);
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
    deleteImg({ movieId }: {
        movieId: any;
    }): Promise<import("typeorm").DeleteResult>;
}
