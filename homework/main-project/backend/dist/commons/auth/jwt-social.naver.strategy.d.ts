import "dotenv/config";
declare const JwtNaverStrategy_base: new (...args: any[]) => any;
export declare class JwtNaverStrategy extends JwtNaverStrategy_base {
    constructor();
    validate(accessToken: any, refreshToken: any, profile: any): {
        email: any;
        password: string;
        name: any;
        phone: string;
        personal: string;
    };
}
export {};
