import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import 'dotenv/config';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // 검사하는부분 실패시 에러 성공시 validate실행
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTPWD,
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  //인가 성공했을때
  validate(accessToken, refreshToken, profile) {
    console.log(accessToken, ': accessToken');
    console.log(refreshToken, ': refreshToken');
    console.log(profile, ': profile');

    return {
      email: profile.emails[0].value,
      hashedPassword: '1234',
      name: profile.displayName,
      age: 0,
    };
  }
}
