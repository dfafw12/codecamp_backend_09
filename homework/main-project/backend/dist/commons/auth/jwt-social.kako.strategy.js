"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtKakaoStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
require("dotenv/config");
class JwtKakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, "kakao") {
    constructor() {
        super({
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/login/kakao",
        });
    }
    validate(accessToken, refreshToken, profile) {
        return {
            email: profile._json.kakao_account.email,
            password: "qwe123",
            name: profile.displayName,
            phone: "01012341234",
            personal: "900101-1234567",
        };
    }
}
exports.JwtKakaoStrategy = JwtKakaoStrategy;
//# sourceMappingURL=jwt-social.kako.strategy.js.map