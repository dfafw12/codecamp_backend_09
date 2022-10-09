export interface IUser {
    user?: {
        email: string;
        id: string;
    };
}
export interface IContext {
    req: Request & IUser;
    res: Response;
}
export interface IOAuthUser {
    user?: {
        name: string;
        phone: string;
        email: string;
        password: string;
        personal: string;
    };
}
