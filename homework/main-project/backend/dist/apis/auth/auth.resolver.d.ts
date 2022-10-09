import { UserService } from "../users/user.service";
import { AuthService } from "./auth.service";
import { IContext } from "src/commons/types/context";
export declare class AuthResolver {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(userEmail: string, password: string, context: IContext): Promise<string>;
    restoreAccessToken(context: IContext): string;
}
