import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Movie } from "src/apis/movies/entites/movie.entity";
import { User } from "src/apis/users/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum MOVIE_USER_ISPAYMENT_ENUM {
  PAYMENT = "PAYMENT",
  CANCEL = "CANCEL",
}

registerEnumType(MOVIE_USER_ISPAYMENT_ENUM, {
  name: "MOVIE_USER_ISPAYMENT_ENUM",
});

@Entity()
@ObjectType()
export class MovieUser {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column({ type: "enum", enum: MOVIE_USER_ISPAYMENT_ENUM })
  @Field(() => String)
  isPayment: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @ManyToOne(() => Movie)
  @Field(() => Movie)
  movie: Movie;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @CreateDateColumn()
  @Field(() => Date)
  createAt: Date;
}
