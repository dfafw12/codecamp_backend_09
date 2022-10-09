import { Field, ObjectType } from "@nestjs/graphql";
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
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  summary: string;

  @Column()
  @Field(() => String)
  open: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isIng: boolean;

  @JoinTable()
  @ManyToMany(() => MovieGenre, (movieGenres) => movieGenres.movies)
  movieGenres: MovieGenre[];

  @JoinTable()
  @ManyToMany(() => MovieTheater, (MovieTheater) => MovieTheater.movies)
  movieTheaters: MovieTheater[];
}
