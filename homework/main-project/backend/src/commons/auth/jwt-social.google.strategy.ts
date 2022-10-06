import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import "dotenv/config";

export class JwtGoogleStrategy extends PassportStrategy(Strategy, "google") {
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
