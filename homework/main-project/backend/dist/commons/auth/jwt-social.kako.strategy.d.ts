import "dotenv/config";
declare const JwtKakaoStrategy_base: new (...args: any[]) => any;
export declare class JwtKakaoStrategy extends JwtKakaoStrategy_base {
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
