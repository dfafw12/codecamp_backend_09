import { Request, Response } from "express";
import { IOAuthUser } from "src/commons/types/context";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginGoogle(req: Request & IOAuthUser, res: Response): void;
    loginNaver(req: Request & IOAuthUser, res: Response): void;
    loginKakao(req: Request & IOAuthUser, res: Response): void;
}
