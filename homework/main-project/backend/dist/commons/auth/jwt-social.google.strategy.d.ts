import { Strategy } from "passport-google-oauth20";
import "dotenv/config";
declare const JwtGoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtGoogleStrategy extends JwtGoogleStrategy_base {
    constructor();
    validate(accessToken: any, refreshToken: any, profile: any): {
        email: any;
        password: string;
        name: any;
        phone: string;
        personal: string;
        grade: string;
    };
}
export {};
