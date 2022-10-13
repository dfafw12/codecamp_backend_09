import { CACHE_MANAGER, Inject, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Cache } from "cache-manager";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtAccessStrategy extends PassportStrategy(Strategy, "access") {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "myAccessKey",
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    // console.log(payload, ": payload");
    // console.log(req, ": req");
    //   return {
    //     email: payload.email,
    //     id: payload.sub,
    //   };
    // }
    const token = req.headers.authorization.replace("Bearer ", "");

    console.log(token);

    const isToken = await this.cacheManager.get(`accessToken:${token}`);

    if (isToken) {
      throw new UnauthorizedException();
    } else {
      return {
        email: payload.email,
        id: payload.sub,
      };
    }
  }
}
