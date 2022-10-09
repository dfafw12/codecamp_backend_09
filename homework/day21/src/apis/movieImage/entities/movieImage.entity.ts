import { Delete } from "@nestjs/common";
import { Field, ObjectType } from "@nestjs/graphql";
import { Movie } from "src/apis/movies/entites/movie.entity";
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class MovieImage {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  url: string;

  @Column()
  @Field(() => Boolean)
  isMain: boolean;

  @ManyToOne(() => Movie)
  @Field(() => Movie)
  movie: Movie;

  @DeleteDateColumn()
  deleteAt: Date;
}
