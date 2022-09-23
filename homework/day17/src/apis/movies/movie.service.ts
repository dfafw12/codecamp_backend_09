import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Movie } from "./entites/movie.entity";

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie> //
  ) {}

  create({ createMovieInput }) {
    const result = this.movieRepository.save({ ...createMovieInput });
    return result;
  }

  findOne({ movieId }) {
    return this.movieRepository.findOne({ where: { id: movieId } });
  }

  findAll() {
    return this.movieRepository.find();
  }

  async update({ movieId, updateMovieInput }) {
    const updateMovie = await this.movieRepository.findOne({
      where: { id: movieId },
    });
    const result = this.movieRepository.save({
      ...updateMovie,
      id: movieId,
      ...updateMovieInput,
    });
    return result;
  }
}
