import { IContext } from "src/commons/types/context";
import { IamportService } from "../iamport/iamport.service";
import { MovieUser } from "./entities/movieUser.entity";
import { MovieUserService } from "./movieUser.service";
export declare class MovieUserResolver {
    private readonly movieUserService;
    private readonly iamportService;
    constructor(movieUserService: MovieUserService, iamportService: IamportService);
    createMovieUser(impUid: string, amount: number, context: IContext): Promise<MovieUser>;
    cancelMovieUser(impUid: string, amount: number, context: IContext): Promise<MovieUser>;
}
