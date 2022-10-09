import { Movie } from "src/apis/movies/entites/movie.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class MovieTheater {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.movieTheaters)
  movie: Movie[];
}
