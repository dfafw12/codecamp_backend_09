import "dotenv/config";
import { Repository } from "typeorm";
import { MovieUser } from "../movieUser/entities/movieUser.entity";
import { User } from "../users/entities/user.entity";
export declare class IamportService {
    private readonly movieUserRepository;
    private readonly userRepository;
    constructor(movieUserRepository: Repository<MovieUser>, userRepository: Repository<User>);
    getAccessToken(): Promise<any>;
    paymentInfo({ impUid, amount, token }: {
        impUid: any;
        amount: any;
        token: any;
    }): Promise<void>;
    cancelPayment({ impUid, amount, token }: {
        impUid: any;
        amount: any;
        token: any;
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
