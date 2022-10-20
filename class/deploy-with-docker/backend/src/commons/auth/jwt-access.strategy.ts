import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  // 검사하는부분 실패시 에러 성공시 validate실행
  constructor() {
    super({
      //검사 로직 부분
      //   jwtFromRequest: (req) => {
      //     const temp = req.header.authorization;
      //     const accessToken = temp.toLowercase().replace('bearer', '');
      //     return accessToken;
      //   },
      //위 로직과 같음
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: 'myAccessKey',
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
