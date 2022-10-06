import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-naver";
import "dotenv/config";

export class JwtNaverStrategy extends PassportStrategy(Strategy, "naver") {
  constructor() {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/login/naver",
      scope: ["email", "profile"],
    });
  }

  validate(accessToken, refreshToken, profile) {
    // console.log(profile);
    return {
      email: profile.emails[0].value,
      password: "qwe123",
      name: profile.displayName,
      phone: "01012341234",
      personal: "900101-1234567",
    };
  }
}
