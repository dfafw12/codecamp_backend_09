"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGoogleStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
require("dotenv/config");
class JwtGoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, "google") {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/login/google",
            scope: ["email", "profile"],
        });
    }
    validate(accessToken, refreshToken, profile) {
        return {
            email: profile.emails[0].value,
            password: "123412341234",
            name: profile.displayName,
            phone: "01012341234",
            personal: "010123-1234567",
            grade: "일반",
        };
    }
}
exports.JwtGoogleStrategy = JwtGoogleStrategy;
//# sourceMappingURL=jwt-social.google.strategy.js.map