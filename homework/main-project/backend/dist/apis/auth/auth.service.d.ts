import { JwtService } from "@nestjs/jwt";
import { UserService } from "../users/user.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    getAccessToken({ user }: {
        user: any;
    }): string;
    setRefreshToken({ user, res }: {
        user: any;
        res: any;
    }): void;
    isUser({ res, req }: {
        res: any;
        req: any;
    }): Promise<void>;
}
