import { Movie } from "src/apis/movies/entites/movie.entity";
import { User } from "src/apis/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class MovieUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  isPayment: string;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => User)
  user: User;
}
