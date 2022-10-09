import { Movie } from "src/apis/movies/entites/movie.entity";
import { User } from "src/apis/users/entities/user.entity";
export declare enum MOVIE_USER_ISPAYMENT_ENUM {
    PAYMENT = "PAYMENT",
    CANCEL = "CANCEL"
}
export declare class MovieUser {
    id: string;
    impUid: string;
    isPayment: string;
    amount: number;
    movie: Movie;
    user: User;
    createAt: Date;
}
