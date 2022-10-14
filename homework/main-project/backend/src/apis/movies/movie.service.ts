import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FilesService } from "../files/files.service";
import { MovieGenre } from "../movieGenre/entities/movieGenre.entity";
import { MovieImage } from "../movieImage/entities/movieImage.entity";
import { Movie } from "./entites/movie.entity";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>, //
    @InjectRepository(MovieGenre)
    private readonly movieGenreRepository: Repository<MovieGenre>,
    @InjectRepository(MovieImage)
    private readonly movieImageRepository: Repository<MovieImage>,
    private readonly filesService: FilesService
  ) {}

  async create({ createMovieInput /*createMovieImageInput */ }) {
    const { files, movieGenres, ...movie } = createMovieInput;

    console.log(files);

    const temp = [];

    // console.log(movieGenres, ":movieGenre");
    for (let i = 0; i < movieGenres.length; i++) {
      const genreName = movieGenres[i];

      const prevGenre = await this.movieGenreRepository.findOne({
        where: { name: genreName },
      });

      if (prevGenre) {
        temp.push(prevGenre);
      } else {
        const newGenre = await this.movieGenreRepository.save({
          name: genreName,
        });
        temp.push(newGenre);
      }
    }

    const result = await this.movieRepository.save({
      movieGenres: temp,
      ...movie,
    });

    const imgTemp = [];

    for (let i = 0; i < files.length; i++) {
      const url = files[i];
      const prevUrl = await this.movieImageRepository.findOne({
        where: { url: url },
      });
      if (prevUrl) {
        imgTemp.push(prevUrl);
      } else {
        const newImg = await this.movieImageRepository.save({
          url: url,
          movie: {
            id: result.id,
          },
        });
        imgTemp.push(newImg);
      }
    }

    return result;
  }

  findOne({ movieId }) {
    return this.movieRepository.findOne({
      where: { id: movieId },
      relations: ["movieGenres", "movieTheaters"],
    });
  }
  async findAll({ search }) {
    return this.movieRepository.find({
      relations: ["movieGenres", "movieTheaters"],
    });
  }

  async update({ movieId, updateMovieInput }) {
    const { files } = updateMovieInput;
    const updateMovie = await this.movieRepository.findOne({
      where: { id: movieId },
    });

    const imgTemp = [];

    for (let i = 0; i < files.length; i++) {
      const url = files[i];
      const prevUrl = await this.movieImageRepository.findOne({
        where: { url: url },
      });
      if (prevUrl) {
        imgTemp.push(prevUrl);
      } else {
        const newImg = await this.movieImageRepository.save({
          url: url,
          movie: {
            id: movieId,
          },
        });
        imgTemp.push(newImg);
      }
    }

    const result = this.movieRepository.save({
      ...updateMovie,
      id: movieId,
      ...updateMovieInput,
      files: imgTemp,
    });

    return result;
  }

  async deleteImg({ movieId }) {
    console.log(movieId);
    const result = await this.movieImageRepository.delete({
      movie: {
        id: movieId,
      },
    });
    console.log(result);
    return result;
  }
}
