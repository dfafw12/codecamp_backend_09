import { Movie } from "src/apis/movies/entites/movie.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class MovieGenre {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Movie, (movies) => movies.movieGenres)
  movies: Movie[];
}
