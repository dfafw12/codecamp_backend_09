import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import "dotenv/config";

export class JwtKakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/login/kakao",
      //   scope: ["email", "profile"],
    });
  }

  validate(accessToken, refreshToken, profile) {
    // console.log(profile, "@@@@@@@@");

    return {
      email: profile._json.kakao_account.email,
      password: "qwe123",
      name: profile.displayName,
      phone: "01012341234",
      personal: "900101-1234567",
    };
  }
}
