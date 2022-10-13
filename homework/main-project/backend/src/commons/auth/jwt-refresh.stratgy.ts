import { CACHE_MANAGER, Inject, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Cache } from "cache-manager";
import { Strategy } from "passport-jwt";

export class JwtRefreshStrategy extends PassportStrategy(Strategy, "refresh") {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache
  ) {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie;
        const refreshToken = cookie.replace("refreshToken=", "");
        return refreshToken;
      },
      secretOrKey: "myRefreshKey",
      passReqToCallback: true,
    });
  }
  async validate(req, payload) {
    // console.log(payload);
    // return {
    //   email: payload.email,
    //   id: payload.sub,
    // };
    // console.log(req.headers.cookie.replace("refreshToken=", ""));
    const token = req.headers.cookie.replace("refreshToken=", "");

    const isToken = await this.cacheManager.get(`refreshToken:${token}`);
    console.log(isToken);
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
