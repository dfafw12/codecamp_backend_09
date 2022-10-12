import { Field, ObjectType } from "@nestjs/graphql";
import { Movie } from "src/apis/movies/entites/movie.entity";
import {
  Column,
  DeleteDateColumn,
  Entity,
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

  @Column({ default: false })
  @Field(() => Boolean)
  isMain: boolean;

  @ManyToOne(() => Movie)
  @Field(() => Movie)
  movie: Movie;

  @DeleteDateColumn()
  deleteAt: Date;
}
