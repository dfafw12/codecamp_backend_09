import { Movie } from "src/apis/movies/entites/movie.entity";
import { User } from "src/apis/users/entities/user.entity";
export declare class MovieUser {
    id: string;
    isPayment: string;
    movie: Movie;
    user: User;
}
