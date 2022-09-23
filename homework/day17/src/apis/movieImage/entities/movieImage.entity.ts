import { Movie } from "src/apis/movies/entites/movie.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class MovieImage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  url: string;

  @Column()
  isMain: boolean;

  @ManyToOne(() => Movie)
  movie: Movie;
}
