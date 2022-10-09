import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // 검사하는부분 실패시 에러 성공시 validate실행
  constructor() {
    super({
      // 검사 로직 부분
      jwtFromRequest: (req) => {
        console.log(req);
        const cookie = req.headers.cookie; // refreshToken=asdjhf;klasdjf
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },
      secretOrKey: 'myRefreshKey',
    });
  }

  //인가 성공했을때
  validate(payload) {
    console.log(payload); // {email : a@a.com, sub: "aslkfsadkfljsa-1231204"}
    return {
      email: payload.email,
      id: payload.sub,
    };
  }
}
