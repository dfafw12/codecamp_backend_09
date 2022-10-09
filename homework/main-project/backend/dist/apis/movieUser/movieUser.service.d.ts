import { DataSource, Repository } from "typeorm";
import { User } from "../users/entities/user.entity";
import { MovieUser, MOVIE_USER_ISPAYMENT_ENUM } from "./entities/movieUser.entity";
export declare class MovieUserService {
    private readonly movieUserRepository;
    private readonly userRepository;
    private readonly dataSource;
    constructor(movieUserRepository: Repository<MovieUser>, userRepository: Repository<User>, dataSource: DataSource);
    create({ impUid, amount, user: _user, isPayment, }: {
        impUid: any;
        amount: any;
        user: any;
        isPayment?: MOVIE_USER_ISPAYMENT_ENUM;
    }): Promise<MovieUser>;
    checkDuplicate({ impUid }: {
        impUid: any;
    }): Promise<void>;
    findOne({ impUid }: {
        impUid: any;
    }): Promise<MovieUser>;
    cancel({ impUid, amount, user: _user, isPayment }: {
        impUid: any;
        amount: any;
        user: any;
        isPayment: any;
    }): Promise<MovieUser>;
}
