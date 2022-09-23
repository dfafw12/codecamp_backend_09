import { MovieTheater } from "src/apis/moveTheater/entities/movieTheater.entity";
import { MovieGenre } from "src/apis/movieGenre/entities/movieGenre.entity";
import { MovieImage } from "src/apis/movieImage/entities/movieImage.entity";

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column()
  open: string;

  @Column()
  isIng: boolean;

  @JoinTable()
  @ManyToMany(() => MovieGenre, (movieGenres) => movieGenres.movies)
  movieGenres: MovieGenre[];

  @JoinTable()
  @ManyToMany(() => MovieTheater, (MovieTheater) => MovieTheater.movies)
  movieTheaters: MovieTheater[];
}
